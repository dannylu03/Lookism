import express from "express";
import { getUsers, createUser, getUserId, deleteUser, updateUser} from "../Controller/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/add", createUser);
router.delete("/:id", deleteUser)
router.put('/update/:id', updateUser)

export default router;



// Get Request
// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// Post request
// router.route("/add").post((req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const gender = req.body.gender;
//   const sizing = req.body.sizing;

//   const newUser = new User({ username, password, gender, sizing });

//   newUser
//     .save()
//     .then(() => res.json("User added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route('/:id').get((req, res) => {
//     User.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  
  // Delete
  // router.route('/:id').delete((req, res) => {
  //   User.findByIdAndDelete(req.params.id)
  //     .then(() => res.json('User deleted.'))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
  