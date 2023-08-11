import express from "express";
import { getTokenCount, getTokenIdsByOwner, getTokenImage, getTokenMetadata } from "../controllers/controller.js";

export const router = express.Router(); 

// !!! network ids !!!
// 0 sepolia
// 1 goerli

// !!! token type !!!
// 'coins' arcade tokens
// 'ants' army ants tokens

router.get('/count/:netId/:tokenType', getTokenCount);
router.get('/images/:netId/:tokenType/:id', getTokenImage);
router.get('/metadata/:netId/:tokenType/:id', getTokenMetadata);
router.get('/token-ids-by-owner/:netId/:tokenType/:ownerAddress', getTokenIdsByOwner);
