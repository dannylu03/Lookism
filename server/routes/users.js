import express from "express";
import { getUsers, createUser, getUserId, loginUser, updateUser, deleteUser} from "../Controller/users.js";

import protect from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", protect, getUserId);
router.post("/add", createUser);
router.post("/login", loginUser); 
router.put('/update/:id', updateUser);
router.delete('/id', deleteUser);

export default router;


  