import prisma from "../config/database";
import { userType } from "../types/userTypes";

export async function getUserByEmail(email: string) {
  return await prisma.users.findUnique({ where: { email } });
}

export async function getUserById(id: number) {
  return await prisma.users.findFirst({ where: { id } });
}

export async function insertUser(user: userType) {
  await prisma.users.create({ data: user });
}

// export async function insertSession(token: string, email: string) {
//   await prisma.sessions.create({ data: { email, token } });
// }

// export async function getSessionByToken(token: string) {
//   return await prisma.sessions.findFirst({ where: { token } });
// }
