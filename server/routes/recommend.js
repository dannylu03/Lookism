import express from "express";
import { recommendOutfits, createData } from "../Controller/recommend.js";

const router = express.Router();

router.get("/recommendOutfit", recommendOutfits);
router.post('/cards', createData);

export default router;
