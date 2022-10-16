import express from "express";
import { addOutfits, recommendOutfits } from "../Controller/recommend";

const router = express.Router();
router.post("/recommendOutfit", recommendOutfits);
router.post("/addOutfit", addOutfits);

export default router;
