import mongoose from "mongoose";

const supportMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "General",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const SupportMessage =
  mongoose.models.SupportMessage ||
  mongoose.model("SupportMessage", supportMessageSchema);
