import { ethers } from "ethers";
import { createPicture } from "../helpers/canvas.js";
import { getContract, getNftIdsByOwner, _getCoinCount } from "../helpers/ethers.js";

// !!! network ids !!!
// 0 sepolia
// 1 goerli

const getCoinDeets = (host, netId, tokenId, colorId, value, isAntDiscountUsed, owner) => {
    if (host.includes('localhost')) host = 'http://' + host + ':3001'
    else host = 'https://' + host
    const antDiscount = isAntDiscountUsed ? 'Used' : 'Available'
    let coinDeets = {};
    coinDeets["owner"] = owner.toLowerCase()
    coinDeets["description"] = "This token represents membership in the bitcow arcade community. Each token offers a one time discount on every current and future NFT project released by the bitcow arcade team as well as additional perks in any games created by our team.";
    coinDeets["image"] = host + "/" + netId + "/coins/images/" + tokenId;
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

export const getCoinCount = async (req, res, next) => {
    try {
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(netId), 0, 0);
       
        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const count = await _getCoinCount(result)
            res.json({ 'count': count })
        }
    } catch(err) {
        next(err);
    }
}

export const getCoin = async (req, res, next) => {
    try {
        const coinId = parseInt(req.params.id);
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        // returns string for bad request or contract object on good request
        const result = await getContract(netId, 0, coinId);
        const antContractResult = await getContract(netId, 1, null, true)

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            const coin = await result.getCoin(coinId);
            const coinOwner = await result.ownerOf(coinId)
            const isAntDiscountUsed = await antContractResult.isDiscountUsed(coinId)
            const coinDeets = getCoinDeets(req.hostname, req.params.netId, req.params.id, parseInt(coin[1]), parseFloat(ethers.utils.formatEther(coin[0])).toString(), isAntDiscountUsed, coinOwner);
            res.json(coinDeets)
        }
    } catch(err) {
        next(err);
    }
}

export const getCoinImage = async (req, res, next) => {
    try {
        const coinId = parseInt(req.params.id);
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        // returns string for bad request or contract object on good request
        const result = await getContract(parseInt(netId), 0, coinId);

        if (typeof result === "string") {
            res.json({message: result});
        } else {
            res.contentType('image/png');
            const coin = await result.getCoin(coinId);
            const coinBuffer = await createPicture(coinId, parseFloat(ethers.utils.formatEther(coin[0])).toString(), parseInt(coin[1]));
            res.send(coinBuffer)
        }
    } catch(err) {
        next(err);
    }
}

export const getOwnersCoins = async (req, res, next) => {
    try {
        const ownerAddress = req.params.ownerAddress.toLowerCase();
        const passedNetId = parseInt(req.params.netId)
        const netId = passedNetId === 5 ? 1 : passedNetId === 11155111 ? 0 : null
        // returns string for bad request or contract object on good request
        const result = await getContract(netId, 0, null, true);

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