import express from "express";
import { getUsers, createUser, getUserId, deleteUser, updateUser, loginUser} from "../Controller/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/add", createUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser); 
router.put('/update/:id', updateUser);

export default router;


  