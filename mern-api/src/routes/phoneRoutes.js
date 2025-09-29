import { Router } from "express";
import {
  getPhones,
  getPhoneById,
  createPhone,
  updatePhone,
  deletePhone,
} from "../controllers/phoneController.js";

const router = Router();

// CRUD
router.get("/", getPhones);
router.get("/:id", getPhoneById);
router.post("/", createPhone);
router.put("/:id", updatePhone);
router.delete("/:id", deletePhone);

// phoneRoutes.js
import { getAllPhones } from "../controllers/phoneController.js";


router.get("/", getAllPhones);

export default router;
