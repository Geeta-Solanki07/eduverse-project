// server/controllers/settingsController.ts
import { Request, Response } from "express";
import Settings from "../models/Setting";

export const getSettings = async (req: Request, res: Response) => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create({ siteName: "Eduverse", theme: "light" });
  }
  res.json({ settings });
};

export const updateSettings = async (req: Request, res: Response) => {
  const { siteName, theme } = req.body;
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create({ siteName, theme });
  } else {
    settings.siteName = siteName || settings.siteName;
    settings.theme = theme || settings.theme;
    await settings.save();
  }
  res.json({ settings, message: "Settings updated" });
};
