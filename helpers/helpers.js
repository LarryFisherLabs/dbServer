import { Storage } from "@google-cloud/storage";
import { staticLayerInfo } from "./antInfo.js";

const _bucketNamePrefix = "bca-p000-"
const _bucketVersionNames = ["og", "v0000"]

export const convertFileName = (fileName) => {
    const fileNameArray = fileName.split("-");
    let name = "";
    for (let i = 1; i < fileNameArray.length; i++) {
        if (i > 1) name = name + " ";
        name = name + fileNameArray[i].charAt(0).toUpperCase() + fileNameArray[i].slice(1);
    }
    return name;
}

// !!!!!!!!! TODO: remove localhost for full production deployment !!!!!!!!!
const requestWhiteList = [
    'http://localhost:3000',
    'https://testants.vercel.app',
    'https://nft-ui-larryfisherlabs.vercel.app',
    'https://armyants.vercel.app'
]

export const isOnWhiteList = (origin) => {
    if (requestWhiteList.includes(origin)) return true
    else return false
}

export const getCoinDeets = (host, netId, tokenId, colorId, value, isAntDiscountUsed, owner, versionId) => {
    if (host.includes('localhost')) host = 'http://' + host + ':3001'
    else host = 'https://' + host
    const antDiscount = isAntDiscountUsed ? 'Used' : 'Available'
    let coinDeets = {};
    coinDeets["owner"] = owner.toLowerCase()
    coinDeets["description"] = "This token represents membership in the bitcow arcade community. Each token offers a one time discount on every current and future NFT project released by the bitcow arcade team as well as additional perks in any games created by our team.";
    coinDeets["image"] = host + "/coins/" + netId + "/" + versionId + "/images/" + tokenId;
    coinDeets["attributes"] = [];
    const color = colorId === 4 ? "Founder" : colorId === 1 ? "Silver" : colorId === 2 ? "Gold" : colorId === 3 ? "Diamond" : "Bronze";
    coinDeets["attributes"].push({
        "trait_type": "Coin Tier",
        "value": color
    });
    coinDeets["attributes"].push({
        "trait_type": "Coin Value",
        "value": parseFloat(value)
    });
    coinDeets["attributes"].push({
        "trait_type": "Ant Discount",
        "value": antDiscount
    });
    return coinDeets;
}

export const getAntDeets = (name, host, netId, tokenId, attributes, rarities, owner, versionId) => {
    if (host.includes('localhost')) host = 'http://' + host + ':3001'
    else host = 'https://' + host
    let antDeets = {};
    antDeets["owner"] = owner.toLowerCase()
    antDeets["name"] = name;
    antDeets["description"] = "Ants will receive descriptions from creators based on traits over time.";
    antDeets["image"] = host + "/ants/" + netId + "/" + versionId + "/images/" + tokenId;
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

const getTokenPathInDb = (netId, tokenTypeId, tokenId, isData) => {
    let folderName = ''
    if (netId === 0) folderName += 'sepolia'
    else if (netId === 1) folderName += 'goerli'
    else return 'Wrong network!'
    if (tokenTypeId === 0) folderName += '-coins'
    else if (tokenTypeId === 1) folderName += '-ants'
    else return 'Collection not found!'
    if (isData === true) folderName += ('-data/' + tokenId + '.json')
    else if (isData === false) folderName += ('-images/' + tokenId + '.png')
    else return 'Specify data or image!'
    return folderName
}

const getBucketName = (versionId) => {
    return (_bucketNamePrefix + _bucketVersionNames[versionId])
}

export const getFileFromDb = async (netId, tokenTypeId, tokenId, versionId, isData) => {
    const tokenPath = getTokenPathInDb(netId, tokenTypeId, tokenId, isData)
    if (tokenPath.includes('!')) return tokenPath
    const bucketName = getBucketName(versionId)

    const storage = new Storage({
        keyFilename: 'key.json'
    })
    const bucket = storage.bucket(bucketName)
    const tokenFile = bucket.file(tokenPath)
    const isFilePres = await tokenFile.exists()
    if (isFilePres[0] === true) return await tokenFile.download()
    else return 'Token not found!'
}

export const storeFileInDb = (netId, tokenTypeId, tokenId, dataToSave, versionId, isData) => {
    const tokenPath = getTokenPathInDb(netId, tokenTypeId, tokenId, isData)
    if (tokenPath.includes('!')) return tokenPath
    const bucketName = getBucketName(versionId)

    const storage = new Storage({
        keyFilename: 'key.json'
    })
    const bucket = storage.bucket(bucketName)
    const newFile = bucket.file(tokenPath)
    newFile.save(dataToSave, (err) => {
        if (!err) {
            console.log("cool")
        } else {
            console.log("error " + err)
        }
    })
}