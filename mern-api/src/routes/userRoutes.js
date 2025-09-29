// import { Router } from "express";

// const router = Router();

// @route GET /api/users
// router.get("/", (req, res) => {
//   res.json({ message: "Users route working 🚀" });
// });

// export default router;


import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  assignPhone,
  assignProject,
} from "../controllers/userController.js";

const router = Router();

// CRUD
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Special: assign additional phone to a user
router.post("/:id/phone", assignPhone);

// Special: assign project(s) to a user
router.post("/:id/projects", assignProject);

export default router;
