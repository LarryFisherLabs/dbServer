import express from "express";
import { getTokenCount, getTokenIdsByOwner, getTokenImage, getTokenMetadata } from "../controllers/controller.js";

export const router = express.Router(); 

// !!! token type !!!
// passed: 'coins', in-project: 0, desc: arcade tokens
// passed: 'ants', in-project: 1, desc: army ants tokens

// !!! network ids !!!
// passed: 11155111, in-project: 0, desc: sepolia
// passed: 5, in-project: 1, desc: goerli

// !!! version type !!!
// passed: 0, in-project: 0, desc: og version
// passed: 1, in-project: 1, desc: v0000

router.get('/:tokenType/:netId/:version/:id', getTokenMetadata);
router.get('/:tokenType/:netId/:version/images/:id', getTokenImage);
router.get('/:tokenType/:netId/:version/count', getTokenCount);
router.get('/:tokenType/:netId/:version/token-ids-by-owner/:ownerAddress', getTokenIdsByOwner);
