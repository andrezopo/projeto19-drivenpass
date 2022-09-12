import {
  deleteById,
  getAll,
  getById,
  insert,
} from "../repositories/cardsRepository";
import { card } from "../types/cardTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.SECRET);

export async function register(card: card, userId: number) {
  try {
    const encryptedCVV = cryptr.encrypt(card.securityCode);
    const encryptedPassword = cryptr.encrypt(card.password);
    card.password = encryptedPassword;
    card.securityCode = encryptedCVV;
    await insert(card, userId);
  } catch (err) {
    throw {
      type: "conflict",
      message: "There is already a card with this title or number",
    };
  }
}

export async function getAllCards(userId: number) {
  const cards = await getAll(userId);
  if (cards.length > 0) {
    const decriptedCards = cards.map((card) => {
      card.password = cryptr.decrypt(card.password);
      card.securityCode = cryptr.decrypt(card.securityCode);
      delete card.userId;
      return card;
    });
    return decriptedCards;
  }
  return cards;
}

export async function getCardById(id: number, userId: number) {
  const card = await getById(id);
  if (!card) {
    throw { type: "notFound", message: "Card not found" };
  }
  if (card.userId !== userId) {
    throw { type: "forbidden", message: "This card is not yours" };
  }
  card.password = cryptr.decrypt(card.password);
  card.securityCode = cryptr.decrypt(card.securityCode);
  return card;
}

export async function deleteCardById(id: number, userId: number) {
  const card = await getById(id);
  if (!card) {
    throw { type: "notFound", message: "Card not found" };
  }
  if (card.userId !== userId) {
    throw { type: "forbidden", message: "This card is not yours" };
  }

  await deleteById(id);
}
