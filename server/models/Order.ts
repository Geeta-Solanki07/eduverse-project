import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  amountPaid: { type: Number, required: true },
  paymentStatus: { type: String, enum: ["Paid", "Pending", "Failed"], default: "Pending" },
  orderDate: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
