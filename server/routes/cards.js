import express from "express";
import { getCards, createCard, getCardId, deleteCard, updateCard} from "../Controller/cards.js";

const router = express.Router();

router.get("/", getCards);
router.get("/:id", getCardId);
router.post("/add", createCard);
router.delete("/:id", deleteCard);
router.put('/update/:id', updateCard);
  
export default router;
