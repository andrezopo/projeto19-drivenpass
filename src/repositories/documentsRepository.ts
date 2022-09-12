import prisma from "../config/database";
import { document } from "../types/documentTypes";

export async function insert(document: document, userId: number) {
  await prisma.documents.create({ data: { ...document, userId } });
}

export async function getAll(userId: number) {
  return await prisma.documents.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.documents.findUnique({ where: { id } });
}

export async function deleteById(id: number) {
  await prisma.documents.delete({ where: { id } });
}
