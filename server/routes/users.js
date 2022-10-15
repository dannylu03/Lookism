import express from "express";
import { getUsers, createUser, getUserId, deleteUser, updateUser, loginUser} from "../Controller/users.js";

import protect from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", protect, getUserId);
router.post("/add", createUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser); 
router.put('/update/:id', updateUser);

export default router;


  