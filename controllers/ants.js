import { staticLayerInfo } from "../helpers/antInfo.js";
import { createAntPicture } from "../helpers/canvas.js";
import { getContract } from "../helpers/ethers.js";
import { convertFileName } from "../helpers/helpers.js";

// !!! network ids !!!
// 0 sepolia
// 1 goerli

const getAntDeets = (name, host, netId, tokenId, attributes, rarities) => {
    let antDeets = {};
    antDeets["name"] = name;
    antDeets["description"] = "Ants will receive descriptions from creators based on traits over time.";
    antDeets["image"] = "https://" + host + "/" + netId + "/ants/images/" + tokenId;
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

export const getAnt = async (req, res, next) => {
    try {
        const antId = parseInt(req.params.id);
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(req.params.netId), 1, antId);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const ant = await result.getAnt(antId);
            const antName = ant[2] === "" ? "Larry" : ant[2];
            const antDeets = getAntDeets(antName, req.hostname, req.params.netId, req.params.id, ant[0].map((partIndex) => parseInt(partIndex)), ant[1].map((partRarity) => parseInt(partRarity)));
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

// const imageFolder = '/Users/jeffreydouglas/Desktop/testDB/images/ants';

// const updateImageRepo = async () => {
//     const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
//     const contract = new ethers.Contract(contractAddress, Ants.abi, provider);
//     const counter = await contract.COUNTER()
//     const count = parseInt(counter);
//     for (let i = 0; i < count; i++) {
//         if (!fs.existsSync(imageFolder + '/' + i)) {
//             const ant = await contract.getAnt(i);
//             await createAntPicture(i, ant[0].map((partIndex) => parseInt(partIndex)));
//         }
//     }
// }

// export const getAntImage = async (req, res, next) => {
//     try {
//         await updateImageRepo();
//         const antId = parseInt(req.params.id);
//         if (!fs.existsSync(imageFolder + '/0')) {
//             res.json({message: "No ants yet"});
//         } else {
//             if (fs.existsSync(imageFolder + '/' + antId)) {
//                 res.contentType('image/png');
//                 fs.createReadStream(imageFolder + '/' + antId).pipe(res)
//             } else {
//                 res.json({message: "Ant not found!"});
//             }
//         }
//     } catch(err) {
//         next(err);
//     }
// }
