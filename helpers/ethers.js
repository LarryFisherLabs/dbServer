import fs from "fs";
import { ethers } from "ethers";
import { isAddress } from "ethers/lib/utils.js";

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

// these will be set to strings in case of a bad request 
const Ants = await _readFile("contracts/Ants.json")
const Coins = await _readFile("contracts/Coins.json")

const netDeets = [
    {
        name: "sepolia",
        contracts: [Coins.address[0], Ants.address[0]]
    },
    {
        name: "goerli",
        contracts: [Coins.address[1], Ants.address[1]]
    }
];

export const _getAntCount = async (contract) => {
    return parseInt(await contract.COUNTER());
}

export const _getCoinCount = async (contract) => {
    const counters = await contract.getCounters();
    return parseInt(counters[0]);
}

// string returned means bad request non-string(contract) means proceed
export const getContract = async (networkId, contractId, tokenId, isIgnoringTokenId = false) => {
    if (typeof Coins === "string" && contractId === 0) return Coins
    else if (typeof Ants === "string" && contractId === 1) return Ants
    else if (networkId !== 0 && networkId !== 1) return "Invalid network!"
    else if (contractId !== 0 && contractId !== 1) return "Invalid contract/project id!"
    else {
        const provider = new ethers.providers.InfuraProvider(netDeets[networkId].name, process.env.INFURA_API_KEY);
        const abi = contractId === 0 ? Coins.abi : Ants.abi;
        const contract = new ethers.Contract(netDeets[networkId].contracts[contractId], abi, provider);
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