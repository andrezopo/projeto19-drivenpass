import {
  getUserByEmail,
  insertSession,
  insertUser,
} from "../repositories/usersRepository";
import { userType } from "../types/userTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function signUp(user: userType) {
  const dbUser = await getUserByEmail(user.email);
  if (dbUser) {
    throw { type: "conflict", message: "Could not create account!" };
  }
  const saltRounds = process.env.SALT_ROUNDS;
  const encodedPassword = bcrypt.hashSync(user.password, saltRounds);
  await insertUser({ email: user.email, password: encodedPassword });
}

export async function signIn(user: userType) {
  const dbUser = await getUserByEmail(user.email);
  if (!dbUser) {
    throw { type: "unauthorized", message: "e-mail and/or password incorrect" };
  }
  const isCorrectPassword = bcrypt.compareSync(user.password, dbUser.password);
  if (!isCorrectPassword) {
    throw { type: "unauthorized", message: "e-mail and/or password incorrect" };
  }
  const secret = process.env.SECRET;
  const token = jwt.sign({ id: dbUser.id }, secret, { expiresIn: 60 * 20 });
  return token;
}
