import AcademicClass from "../models/AcademicClass";
import Category from "../models/Category";

export const getNavbarData = async (_: any, res: { json: (arg0: { academics: any[]; it: any[]; }) => void; }) => {
  const academics = await AcademicClass.find().select("title slug category");
  const it = await Category.find({ type: "it" });

  res.json({ academics, it });
};
