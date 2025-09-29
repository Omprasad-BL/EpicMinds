import AdditionalPhone from "../models/phoneModel.js";

// Get all phones
export const getPhones = async (req, res) => {
  try {
    const phones = await AdditionalPhone.find().populate("user");
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get phone by ID
export const getPhoneById = async (req, res) => {
  try {
    const phone = await AdditionalPhone.findById(req.params.id).populate("user");
    if (!phone) return res.status(404).json({ message: "Phone not found" });
    res.json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create phone
export const createPhone = async (req, res) => {
  try {
    const phone = new AdditionalPhone(req.body);
    const saved = await phone.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update phone
// export const updatePhone = async (req, res) => {
//   try {
//     const phone = await AdditionalPhone.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!phone) return res.status(404).json({ message: "Phone not found" });
//     res.json(phone);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Delete phone
export const deletePhone = async (req, res) => {
  try {
    const phone = await AdditionalPhone.findByIdAndDelete(req.params.id);
    if (!phone) return res.status(404).json({ message: "Phone not found" });
    res.json({ message: "Phone deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updatePhone = async (req, res) => {
  const { id } = req.params;       // phone document id
  const { phoneNumber, user } = req.body; // user optional

  try {
    const phone = await AdditionalPhone.findByIdAndUpdate(
      id,
      { phoneNumber, user },
      { new: true }
    );

    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }

    // Update reference in User document if user provided
    if (user) {
      await User.findByIdAndUpdate(user, { additionalPhone: phone._id });
    }

    res.json(phone);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllPhones = async (req, res) => {
  try {
    const phones = await AdditionalPhone.find();
    res.json(phones);
  } catch (err) {
    res.status(500).json({ message: "Error fetching phones" });
  }
};