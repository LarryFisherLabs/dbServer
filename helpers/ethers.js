import fs from "fs";
import { ethers } from "ethers";
import { isAddress } from "ethers/lib/utils.js";
import { Coins } from "../contracts/Coins.js";
import { Ants } from "../contracts/Ants.js";

// !!! network ids !!!
// 0 sepolia
// 1 goerli

// !!! contract ids !!!
// 0 coin
// 1 ant

// returns string only in the event of an error Json object otherwise
const _readFile = async (filePath) => {
    try {
        const fileData = await fs.promises.readFile(filePath)
        return JSON.parse(fileData)
    } catch (error) {
        const errorString = 'Error trying to read image file: ' + error.message
        console.error(errorString)
        return errorString
    }
}

const contracts = {
    coins: {
        og: {
            sepolia: "0xC65480c0FCB7f2BEf837aaB38800A10b7E38be94",
            goerli: "0x164fc781381EF05ea9983b8f23b565dfa41502a4"
        },
        v0000: {
            sepolia: "0x9bf33ef2f78b957709eaa8ab6dcd69e8833102aa",
            goerli: "0xbc0cc29b4134f4c8a53ad70cAeE4D507cce94c2c"
        }
    },
    ants: {
        og: {
            sepolia: "0x85C995570E03051cA1E610E15e34abE2cFcA649D",
            goerli: "0x91DaDA74286e9CF287e536e2969FC14D034b85b0"
        },
        v0000: {
            sepolia: "0xa177a0b2f52f75babf9d34386900bce3eb47b7a2",
            goerli: "0x695d67BA37ab330F6E776f959aD2fD06fF3136D7"
        }
    }
}

export const _getAntCount = async (contract) => {
    return parseInt(await contract.COUNTER());
}

export const _getCoinCount = async (contract) => {
    const counters = await contract.getCounters();
    return parseInt(counters[0]);
}

export const getContract = async (networkId, contractId, tokenId, versionId, isIgnoringTokenId = false) => {
    if (networkId !== 0 && networkId !== 1) return "Invalid network!"
    else if (contractId !== 0 && contractId !== 1) return "Invalid contract/project id!"
    else if (versionId !== 0 && versionId !== 1) return "Invalid version id!"
    else {
        let netName, abi, contractAddy
        if (contractId === 0) {
            abi = Coins.abi
            contractAddy = contracts.coins
        } else {
            abi = Ants.abi[versionId]
            contractAddy = contracts.ants
        }
        if (versionId === 0) contractAddy = contractAddy.og
        else contractAddy = contractAddy.v0000
        if (networkId === 0) {
            netName = 'sepolia'
            contractAddy = contractAddy.sepolia
        } else {
            netName = 'goerli'
            contractAddy = contractAddy.goerli
        }
        const provider = new ethers.providers.InfuraProvider(netName, process.env.INFURA_API_KEY);
        const contract = new ethers.Contract(contractAddy, abi, provider);
        if (isIgnoringTokenId) {
            return contract;
        }
        const count = contractId === 0 ? await _getCoinCount(contract) : await _getAntCount(contract);
        if (count < 1) {
            return "No tokens yet";
        } else if (tokenId < count) {
            return contract;
        } else {
            return "Token not found!";
        }
    }
}

export const getNftIdsByOwner = async (contract, ownerAddress) => {
    if (!isAddress(ownerAddress)) return `is address: ${isAddress(ownerAddress)}, address: ${ownerAddress}`;
    const balance = await contract.balanceOf(ownerAddress);
    let nftIds = [];
    if (balance > 0) {
        const transferLogs = await contract.queryFilter(contract.filters.Transfer(null, ownerAddress));
        for (let i = 0; i < transferLogs.length; i++) {
            // get the indexed id 
            const id = parseInt(transferLogs[i].args[2]);
            if (!nftIds.includes(id)) {
                nftIds.push(id);
            }
        }
        if (nftIds.length > balance) {
            for (let i = 0; i < nftIds.length; i++) {
                const owner = await contract.ownerOf(nftIds[i]);
                if (owner !== ownerAddress) {
                    nftIds.splice(i, 1);
                }
                if (nftIds.length === balance) {
                    i = nftIds.length;
                }
            }
        }
    }
    return nftIds;
}