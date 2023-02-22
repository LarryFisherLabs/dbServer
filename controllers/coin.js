import { ethers } from "ethers";
import Coins from "../contracts/Coins.json";
import { createPicture } from "../helpers/canvas.js";

const contractAddress = Coins.address;

export const getCoinImage = async (req, res, next) => {
    try {
        const coinId = parseInt(req.params.id);
        const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
        const contract = new ethers.Contract(contractAddress, Coins.abi, provider);
        const counters = await contract.getCounters()
        const count = parseInt(counters[0]);

        if (count < 1) {
            res.json({message: "No Coins yet"});
        } else if (coinId < count) {
            res.contentType('image/png');
            const coin = await contract.getCoin(coinId);
            const coinBuffer = await createPicture(coinId, ethers.utils.formatEther(coin[0]), parseInt(coin[1]));
            res.send(coinBuffer)
        } else {
            res.json({message: "Coin not found!"});
        }
    } catch(err) {
        next(err);
    }
}

// const imageFolder = '/Users/jeffreydouglas/Desktop/testDB/images/coins';

// const updateImageRepo = async () => {
//     const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
//     const contract = new ethers.Contract(contractAddress, Coins.abi, provider);
//     const counters = await contract.getCounters()
//     const count = parseInt(counters[0]);
//     for (let i = 0; i < count; i++) {
//         if (!fs.existsSync(imageFolder + '/' + i)) {
//             const coin = await contract.getCoin(i);
//             await createPicture(i, ethers.utils.formatEther(coin[0]), parseInt(coin[1]));
//         }
//     }
// }

// export const getImage = async (req, res, next) => {
//     try {
//         await updateImageRepo();
//         const coinId = parseInt(req.params.id);
//         if (!fs.existsSync(imageFolder + '/0')) {
//             res.json({message: "No Coins yet"});
//         } else {
//             if (fs.existsSync(imageFolder + '/' + coinId)) {
//                 res.contentType('image/png');
//                 fs.createReadStream(imageFolder + '/' + coinId).pipe(res)
//             } else {
//                 res.json({message: "Coin not found!"});
//             }
//         }
//     } catch(err) {
//         next(err);
//     }
// }

// export const getCoin = async(req, res, next) => {
//     try {
//         if (fs.existsSync(metaFile + `/${req.params.name}`)) {
//             const metaData = JSON.parse(fs.readFileSync(metaFile + `/${req.params.name}`));
//             res.json(metaData);
//         } else {
//             const provider = new ethers.providers.JsonRpcProvider("localhost:8545");
//             const contract = new ethers.Contract(contractAddress, Coins.abi, provider);
//             const count = parseInt(await contract.getCount(), 16);
//             const id = parseInt(req.params.name);
//             if (id < count && id >= 0) {
//                 const coin = await contract.coins[id];
//                 const formatCoin = {
//                     'color': coin.color,
//                     'value': ethers.utils.formatEther(coin.value),
//                     'image': serverUrl + '/coins/images/' + id
//                 }
//                 fs.writeFileSync(metaFile + `/${req.params.name}`, JSON.stringify(formatCoin));
//                 res.json(formatCoin);
//             }
//         }
//     } catch(err) {
//         next(err);
//     }
// };

// export const getImage = (req, res, next) => {
//     try {

//     } catch(err) {
//         next(err);
//     }
// };

// export const getCoins = (req, res, next) => {
//     try {
//         if (!fs.existsSync(listFile)) {
//             res.json({call: "GET all coins", message: "No Coins yet"});
//         } else {
//             const list = JSON.parse(fs.readFileSync(listFile));
//             res.json(list);
//         }
//     } catch(err) {
//         next(err);
//     }
// };

// export const newCoin = (req, res, next) => {
//     try {
//         if (!fs.existsSync(dbFolder)) {
//             fs.mkdirSync(dbFolder);
//         }
//         const coin = req.body;
//         if (!fs.existsSync(listFile)) {
//             if (coin.id === "0") {
//                 const formatCoin = {
//                     [coin.id]: {
//                         "color": coin.color,
//                         "value": coin.value,
//                         "image": serverUrl + '/coins/images/' + coin.id
//                     }
//                 };
//                 fs.writeFileSync(listFile, JSON.stringify(formatCoin));
//                 res.json({message: "First Coin Posted"});
//             } else {
//                 res.status(400).json({message: "Start with coin 0!"});
//             }
//         } else {
//             const list = JSON.parse(fs.readFileSync(listFile));
//             if (coin.id in list) {
//                 res.status(400).json({message: "Coin already exists"});
//             } else if (!((parseInt(coin.id) - 1).toString() in list)) {
//                 res.status(400).json({message: "Previous coin index does not exist!"});
//             } else {
//                 list[coin.id] = {
//                     "color": coin.color,
//                     "value": coin.value,
//                     "image": serverUrl + '/coins/images/' + coin.id
//                 };
//                 fs.writeFileSync(listFile, JSON.stringify(list));
//                 res.json({message: "New Coin Posted"});
//             }
//         }
//     } catch(err) {
//         next(err);
//     }
// };

// export const getCoin = (req, res, next) => {
//     try {
//         if (!fs.existsSync(listFile)) {
//             res.json({call: "GET coin", message: "No Coins yet"});
//         } else {
//             const list = JSON.parse(fs.readFileSync(listFile));
//             if (req.params.name in list) {
//                 res.json(list[req.params.name]);
//             } else {
//                 res.json({message: "Coin not found!"});
//             }
//         }
//     } catch(err) {
//         next(err);
//     }
// }

