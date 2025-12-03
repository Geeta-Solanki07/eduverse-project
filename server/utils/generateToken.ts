import jwt from "jsonwebtoken";

export const generateToken = (payload: object) => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not set");
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export default generateToken;
