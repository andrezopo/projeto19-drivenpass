import prisma from "../config/database";
import { credential } from "../types/credentialTypes";

export async function insert(credential: credential, userId: number) {
  await prisma.credentials.create({ data: { ...credential, userId } });
}

export async function getAll(userId: number) {
  return await prisma.credentials.findMany({ where: { userId } });
}
