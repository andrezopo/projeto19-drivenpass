import prisma from "../config/database";
import { wifi } from "../types/wifiTypes";

export async function insert(wifi: wifi, userId: number) {
  await prisma.wifis.create({ data: { ...wifi, userId } });
}

export async function getAll(userId: number) {
  return await prisma.wifis.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.wifis.findUnique({ where: { id } });
}

export async function deleteById(id: number) {
  await prisma.wifis.delete({ where: { id } });
}
