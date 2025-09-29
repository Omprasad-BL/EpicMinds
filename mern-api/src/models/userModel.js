import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    additionalPhone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AdditionalPhone", // reference one-to-one
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project", // one-to-many
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
