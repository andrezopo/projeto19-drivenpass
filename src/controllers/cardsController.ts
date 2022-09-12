import { Request, Response } from "express";
import { card } from "../types/cardTypes";
import * as cardService from "../services/cardServices";

export async function register(req: Request, res: Response) {
  const card: card = req.body;
  const userId: number = res.locals.userId;
  await cardService.register(card, userId);
  res.status(201).send("Card created successfully");
}

export async function getAll(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const cards = await cardService.getAllCards(userId);
  res.status(200).send(cards);
}

export async function getById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);
  const card = await cardService.getCardById(id, userId);
  delete card.userId;
  res.status(200).send(card);
}

export async function deleteById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);

  await cardService.deleteCardById(id, userId);
  res.status(200).send("Card removed successfully");
}
