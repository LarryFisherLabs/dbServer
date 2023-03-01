import Ants from "../contracts/Ants.json";
import Coins from "../contracts/Coins.json";
import { ethers } from "ethers";

// for local testing assert { type: 'json' }

// !!! network ids !!!
// 0 sepolia
// 1 goerli

// !!! contract ids !!!
// 0 coin
// 1 ant

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
    if (isNaN(networkId) || parseInt(networkId) >= netDeets.length || parseInt(networkId) < 0) {
        return "Invalid network!";
    } else {
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
