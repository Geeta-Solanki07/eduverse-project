// server/controllers/chapterController.ts
import { Request, Response } from "express";
import Chapter from "../models/Chapter";

export const getChaptersBySubject = async (req: Request, res: Response) => {
  const { subjectSlug } = req.params;

  const chapters = await Chapter.find({ subjectSlug }).sort({ order: 1 });
  res.json(chapters);
};

export const createChapter = async (req: Request, res: Response) => {
  const created = await Chapter.create(req.body);
  res.status(201).json(created);
};
