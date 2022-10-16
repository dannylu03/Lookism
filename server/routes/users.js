import express from "express";
import { getUsers, createUser, getUserId, loginUser, updateUser, deleteUser} from "../Controller/users.js";

import protect from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", protect, getUserId);
router.post("/add", createUser);
router.post("/login", loginUser); 
router.put('/update/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

export default router;

