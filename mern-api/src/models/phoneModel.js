import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema(
  {
    phoneNumber: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true, // one-to-one (each user has only 1 additional phone)
    },
  },
  { timestamps: true }
);

const AdditionalPhone = mongoose.model("AdditionalPhone", phoneSchema);

export default AdditionalPhone;
