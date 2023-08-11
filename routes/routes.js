import express from "express";
import { getTokenCount, getTokenIdsByOwner, getTokenImage, getTokenMetadata } from "../controllers/controller.js";

export const router = express.Router(); 

// !!! network ids !!!
// passed: 11155111, in-project: 0, desc: sepolia
// passed: 5, in-project: 1, desc: goerli

// !!! token type !!!
// passed: 'coins', in-project: 0, desc: arcade tokens
// passed: 'ants', in-project: 1, desc: army ants tokens

router.get('/count/:netId/:tokenType', getTokenCount);
router.get('/images/:netId/:tokenType/:id', getTokenImage);
router.get('/metadata/:netId/:tokenType/:id', getTokenMetadata);
router.get('/token-ids-by-owner/:netId/:tokenType/:ownerAddress', getTokenIdsByOwner);
