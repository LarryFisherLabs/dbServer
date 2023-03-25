import express from "express";
import { getAnt, getAntCount, getAntImage, getOwnersAnts } from "../controllers/ants.js";
import { getCoin, getCoinCount, getCoinImage, getOwnersCoins } from "../controllers/coin.js";

export const router = express.Router(); 

// !!! network ids !!!
// 0 sepolia
// 1 goerli

router.get('/:netId/coins/count', getCoinCount);
router.get('/:netId/ants/count', getAntCount);
router.get('/:netId/coins/images/:id', getCoinImage);
router.get('/:netId/ants/images/:id', getAntImage);
router.get('/:netId/coins/:id', getCoin);
router.get('/:netId/ants/:id', getAnt);
router.get('/:netId/coin-ids/:ownerAddress', getOwnersCoins);
router.get('/:netId/ant-ids/:ownerAddress', getOwnersAnts);
