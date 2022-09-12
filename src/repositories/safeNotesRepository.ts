import prisma from "../config/database";
import { safeNote } from "../types/safeNoteTypes";

export async function insert(safeNote: safeNote, userId: number) {
  await prisma.safeNotes.create({ data: { ...safeNote, userId } });
}

export async function getAll(userId: number) {
  return await prisma.safeNotes.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.safeNotes.findUnique({ where: { id } });
}

export async function deleteById(id: number) {
  await prisma.safeNotes.delete({ where: { id } });
}
