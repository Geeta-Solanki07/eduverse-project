// server/controllers/subjectController.ts
import { Request, Response } from "express";
import Subject from "../models/Subject";

export const getSubjectsByClass = async (req: Request, res: Response) => {
  const { classSlug } = req.params;

  const subjects = await Subject.find({ classSlug });
  res.json(subjects);
};

export const createSubject = async (req: Request, res: Response) => {
  const created = await Subject.create(req.body);
  res.status(201).json(created);
};
