import { Router } from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = Router();

// CRUD
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;


// POST /api/projects/assign
router.put("/assign", async (req, res) => {
  const { userId, projectId } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { $push: { projects: projectId } });
    res.json({ message: "Project assigned" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
