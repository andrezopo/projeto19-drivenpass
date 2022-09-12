import prisma from "../config/database";
import { card } from "../types/cardTypes";

export async function insert(card: card, userId: number) {
  await prisma.cards.create({ data: { ...card, userId } });
}

export async function getAll(userId: number) {
  return await prisma.cards.findMany({ where: { userId } });
}

export async function getById(id: number) {
  return await prisma.cards.findUnique({ where: { id } });
}

export async function deleteById(id: number) {
  await prisma.cards.delete({ where: { id } });
}
