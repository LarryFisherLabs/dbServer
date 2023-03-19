import fs from "fs";
import { ethers } from "ethers";

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

const getCoinCount = async (contract) => {
    const counters = await contract.getCounters();
    return parseInt(counters[0]);
}

// string returned means bad request non-string(contract) means proceed
export const getContract = async (networkId, contractId, tokenId) => {
    if (typeof Coins === "string" && contractId === 0) return Coins
    else if (typeof Ants === "string" && contractId ===1) return Ants
    else if (isNaN(networkId) || parseInt(networkId) >= netDeets.length || parseInt(networkId) < 0) return "Invalid network!";
    else {
        const provider = new ethers.providers.InfuraProvider(netDeets[networkId].name, process.env.INFURA_API_KEY);
        const abi = contractId === 0 ? Coins.abi : Ants.abi
        const contract = new ethers.Contract(netDeets[networkId].contracts[contractId], abi, provider);
        const count = contractId === 0 ? await getCoinCount(contract) : parseInt(await contract.COUNTER());
        if (count < 1) {
            return "No tokens yet";
        } else if (tokenId < count) {
            return contract;
        } else {
            return "Token not found!";
        }
    }
}
