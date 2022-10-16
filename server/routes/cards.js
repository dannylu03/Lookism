import express from "express";
import {getCards, createCard, getCardId, deleteCard, updateCard} from "../Controller/cards.js";

const router = express.Router();

import protect from '../middleware/authentication.js';

router.get("/", getCards);
router.get("/getUser", protect, getCardId);
router.post("/add", protect, createCard);
router.delete("/:id", protect, deleteCard);
router.put('/update/:id', protect, updateCard);
  
export default router;