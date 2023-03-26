import { staticLayerInfo } from "../helpers/antInfo.js";
import { createAntPicture } from "../helpers/canvas.js";
import { getContract, getNftIdsByOwner, _getAntCount } from "../helpers/ethers.js";
import { convertFileName } from "../helpers/helpers.js";

// !!! network ids !!!
// 0 sepolia
// 1 goerli

const getAntDeets = (name, host, netId, tokenId, attributes, rarities, owner) => {
    if (host.includes('localhost')) host = 'http://' + host + ':3001'
    else host = 'https://' + host
    let antDeets = {};
    antDeets["owner"] = owner.toLowerCase()
    antDeets["name"] = name;
    antDeets["description"] = "Ants will receive descriptions from creators based on traits over time.";
    antDeets["image"] = host + "/" + netId + "/ants/images/" + tokenId;
    antDeets["attributes"] = [];
    let rarityScore = 0;
    // i === layerLevel
    for (let i = 0; i < 15; i++) {
        const layer = staticLayerInfo[i];
        const layerName = convertFileName(layer.fileName);
        const partName = convertFileName(layer.elements[attributes[i]].name);
        
        // don't include metadata for blank sections or base element for antenna, arm or leg
        if (rarities[i] !== 0 || i === 7 || i === 9 || i === 14) {
            antDeets["attributes"].push({
                "trait_type": layerName,
                "value": partName
            });
            antDeets["attributes"].push({
                "trait_type": layerName + " Rarity",
                "value": rarities[i]
            });
            rarityScore += rarities[i];
        }
    }
    antDeets["attributes"].push({
        "trait_type": "Total Rarity Score",
        "value": rarityScore
    });
    return antDeets;
}

export const getAntCount = async (req, res, next) => {
    try {
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(req.params.netId), 1, 0);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const count = await _getAntCount(result)
            res.json({ 'count': count })
        }
    } catch(err) {
        next(err);
    }
}

export const getAnt = async (req, res, next) => {
    try {
        const antId = parseInt(req.params.id);
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(req.params.netId), 1, antId);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const ant = await result.getAnt(antId);
            const antOwner = await result.ownerOf(antId)
            const antName = ant[2] === "" ? "Larry" : ant[2];
            const antDeets = getAntDeets(antName, req.hostname, req.params.netId, req.params.id, ant[0].map((partIndex) => parseInt(partIndex)), ant[1].map((partRarity) => parseInt(partRarity)), antOwner);
            res.json(antDeets)
        }
    } catch(err) {
        next(err);
    }
}

export const getAntImage = async (req, res, next) => {
    try {
        const antId = parseInt(req.params.id);
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(req.params.netId), 1, antId);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            res.contentType('image/png');
            const ant = await result.getAnt(antId);
            const antBuffer = await createAntPicture(ant[0].map((partIndex) => parseInt(partIndex)));
            res.send(antBuffer)
        }
    } catch(err) {
        next(err);
    }
}

export const getOwnersAnts = async (req, res, next) => {
    try {
        const ownerAddress = req.params.ownerAddress.toLowerCase();
        const netId = parseInt(req.params.netId);
        // returns string for bad request or contract object on good request
        const result = await getContract(netId, 1, null, true);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const ids = await getNftIdsByOwner(result, ownerAddress);
            res.json({ 'ids': ids });
        }
    } catch(err) {
        next(err);
    }
}