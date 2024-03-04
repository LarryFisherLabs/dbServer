import { ethers } from "ethers";
import { createAntPicture, createPicture } from "../helpers/canvas.js";
import { _getAntCount, _getCoinCount, getContract, getNftIdsByOwner } from "../helpers/ethers.js";
import { getAntDeets, getCoinDeets, getFileFromDb, storeFileInDb } from "../helpers/helpers.js";

export const getTokenCount = async (req, res, next) => {
    try {
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        const collectionId = req.params.tokenType === 'coins' ? 0 : req.params.tokenType === 'ants' ? 1 : null
        const versionId = parseInt(req.params.version)

        // returns string for bad request or contract object on good request
        const result = await getContract(netId, collectionId, 0, versionId)
        if (typeof result === "string") {
            res.json({message: result})
        } else {
            const count = collectionId === 0 ? await _getCoinCount(result) : await _getAntCount(result)
            res.json({ 'count': count })
        }
    } catch(err) {
        next(err)
    }
}

export const getTokenImage = async (req, res, next) => {
    try {
        const tokenId = parseInt(req.params.id);
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        const collectionId = req.params.tokenType === 'coins' ? 0 : req.params.tokenType === 'ants' ? 1 : null
        const versionId = parseInt(req.params.version)

        const dbResponse = await getFileFromDb(netId, collectionId, tokenId, versionId, false)
        if (typeof dbResponse === "string" && dbResponse !== 'Token not found!') {
            res.json({message: result});
        } else if (dbResponse === 'Token not found!') {
            // returns string for bad request or contract object on good request
            const result = await getContract(netId, collectionId, tokenId, versionId);
            if (typeof result === "string") {
                res.json({message: result});
            } else {
                res.contentType('image/png');
                const imageInfo = collectionId === 0 ? await result.getCoin(tokenId) : await result.getAnt(tokenId);
                const imageBuffer = collectionId === 0 ? await createPicture(tokenId, parseFloat(ethers.utils.formatEther(imageInfo[0])).toString(), parseInt(imageInfo[1])) : await createAntPicture(imageInfo[0].map((partIndex) => parseInt(partIndex)));
                storeFileInDb(netId, collectionId, tokenId, imageBuffer, versionId, false)
                res.send(imageBuffer)
            }
        } else {
            res.contentType('image/png')
            res.send(dbResponse[0])
        }
    } catch(err) {
        next(err);
    }
}

export const getTokenMetadata = async (req, res, next) => {
    try {
        const tokenId = parseInt(req.params.id);
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        const collectionId = req.params.tokenType === 'coins' ? 0 : req.params.tokenType === 'ants' ? 1 : null
        const versionId = parseInt(req.params.version)

        //const dbResponse = await getFileFromDb(netId, collectionId, tokenId, versionId, true)

        //if (dbResponse === "Token not found!") {
            // returns string for bad request or contract object on good request
            const result = await getContract(netId, collectionId, tokenId, versionId);
            if (typeof result === "string") {
                res.json({message: result});
            } else {
                const tokenInfo = collectionId === 0 ? await result.getCoin(tokenId) : await result.getAnt(tokenId);
                const tokenOwner = await result.ownerOf(tokenId)
                if (collectionId === 0) {
                    // get coin detail from ant contract
                    const antContractResult = await getContract(netId, 1, null, versionId, true)
                    if (typeof antContractResult === "string") {
                        res.json({message: antContractResult});
                    } else {
                        const isAntDiscountUsed = await antContractResult.isDiscountUsed(tokenId)
                        const coinDeets = getCoinDeets(req.hostname, req.params.netId, req.params.id, parseInt(tokenInfo[1]), parseFloat(ethers.utils.formatEther(tokenInfo[0])).toString(), isAntDiscountUsed, tokenOwner, versionId);
                        res.json(coinDeets)
                    }
                } else {
                    const antName = tokenInfo[2] === "" ? "Larry" : tokenInfo[2];
                    const antDeets = getAntDeets(antName, req.hostname, req.params.netId, req.params.id, tokenInfo[0].map((partIndex) => parseInt(partIndex)), tokenInfo[1].map((partRarity) => parseInt(partRarity)), tokenOwner, versionId);
                    res.json(antDeets)
                }
            }
        //}
    } catch(err) {
        next(err);
    }
}

export const getTokenIdsByOwner = async (req, res, next) => {
    try {
        const ownerAddress = req.params.ownerAddress.toLowerCase();
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        const collectionId = req.params.tokenType === 'coins' ? 0 : req.params.tokenType === 'ants' ? 1 : null
        const versionId = parseInt(req.params.version)

        // returns string for bad request or contract object on good request
        const result = await getContract(netId, collectionId, null, versionId, true);
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