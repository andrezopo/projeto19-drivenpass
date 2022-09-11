import { Request, Response } from "express";
import { userType } from "../types/userTypes";
import * as userServices from "../services/userServices";

export async function signUp(req: Request, res: Response) {
  const user: userType = req.body;
  await userServices.signUp(user);
  res.status(201).send("User created successfully");
}

export async function signIn(req: Request, res: Response) {
  const user: userType = req.body;
  const token = await userServices.signIn(user);

  res.status(200).send({ email: user.email, token });
}
