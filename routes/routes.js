import express from "express";
import { getAnt, getAntImage } from "../controllers/ants.js";
import { getCoin, getCoinImage } from "../controllers/coin.js";

export const router = express.Router(); 

// !!! network ids !!!
// 0 sepolia
// 1 goerli

router.get('/:netId/coins/images/:id', getCoinImage);
router.get('/:netId/ants/images/:id', getAntImage);
router.get('/:netId/coins/:id', getCoin);
router.get('/:netId/ants/:id', getAnt);
