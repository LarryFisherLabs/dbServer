import { ethers } from "ethers";
import Ants from "../contracts/Ants.json" assert { type: 'json' };
import { createAntPicture } from "../helpers/canvas.js";

const contractAddress = Ants.address;

export const getAntImage = async (req, res, next) => {
    try {
        const antId = parseInt(req.params.id);
        const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
        const contract = new ethers.Contract(contractAddress, Ants.abi, provider);
        const count = parseInt(await contract.COUNTER());

        if (count < 1) {
            res.json({message: "No ants yet"});
        } else if (antId < count) {
            res.contentType('image/png');
            const ant = await contract.getAnt(antId);
            const antBuffer = await createAntPicture(antId, ant[0].map((partIndex) => parseInt(partIndex)));
            res.send(antBuffer)
        } else {
            res.json({message: "Ant not found!"});
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