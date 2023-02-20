import express from "express";
import { getAntImage } from "../controllers/ants.js";
import { getCoinImage } from "../controllers/coin.js";

export const router = express.Router(); 

router.get('/coins/images/:id', getCoinImage);
router.get('/ants/images/:id', getAntImage);