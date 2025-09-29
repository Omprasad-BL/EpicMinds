import Project from "../models/projectModel.js";

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("user");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("user");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create project
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update project
// export const updateProject = async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!project) return res.status(404).json({ message: "Project not found" });
//     res.json(project);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// projectController.js

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, user } = req.body; // user is optional

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { name, user }, // updates name and/or user assignment
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
