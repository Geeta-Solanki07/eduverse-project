// server/models/Settings.ts
import { Schema, model, Document } from "mongoose";

export interface ISettings extends Document {
  siteName: string;
  theme: "light" | "dark";
}

const SettingsSchema = new Schema<ISettings>(
  {
    siteName: { type: String, required: true, default: "Eduverse" },
    theme: { type: String, enum: ["light", "dark"], default: "light" },
  },
  { timestamps: true }
);

export default model<ISettings>("Settings", SettingsSchema);
