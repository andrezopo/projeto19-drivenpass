import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserById } from "../repositories/usersRepository";

dotenv.config();

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(422).send("Missing token");
    }

    const decodedToken: any = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).send("Unauthorized");
    }

    const user = await getUserById(decodedToken.id);

    if (user.id !== decodedToken.id) {
      return res.status(401).send("Unauthorized");
    }

    res.locals.userId = user.id;
    res.locals.token = token;

    next();
  } catch (err) {
    res.status(500).send("Erro interno!");
    return;
  }
}
