import User from "../models/userModel.js";
import AdditionalPhone from "../models/phoneModel.js";
import Project from "../models/projectModel.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("additionalPhone")
      .populate("projects");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("additionalPhone")
      .populate("projects");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assign additional phone
export const assignPhone = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const phone = new AdditionalPhone({ phoneNumber, user: user._id });
    await phone.save();

    user.additionalPhone = phone._id;
    await user.save();

    res.json({ message: "Phone assigned", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assign project
export const assignProject = async (req, res) => {
  try {
    const { projectName } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const project = new Project({ name: projectName, user: user._id });
    await project.save();

    user.projects.push(project._id);
    await user.save();

    res.json({ message: "Project assigned", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
