import express from "express";
import { recommendOutfits } from "../Controller/recommend.js";

const router = express.Router();
router.post("/recommendOutfit", recommendOutfits);

export default router;
