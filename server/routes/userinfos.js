import express from "express";
import {getInfo, createInfo, deleteInfo, updateInfo} from "../Controller/userinfo.js";

import protect from "../middleware/authentication.js";

const router = express.Router();

router.get("/", protect, getInfo);
router.post("/add", protect, createInfo);
router.delete("/:id", protect, deleteInfo);
router.put('/update/:id', protect, updateInfo);

export default router;


