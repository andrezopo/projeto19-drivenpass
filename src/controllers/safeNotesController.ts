import { Request, Response } from "express";
import { safeNote } from "../types/safeNoteTypes";
import * as safeNoteService from "../services/safeNoteService";

export async function register(req: Request, res: Response) {
  const safeNote: safeNote = req.body;
  const userId: number = Number(res.locals.userId);
  await safeNoteService.register(safeNote, userId);
  res.status(201).send("Safe-note created successfully");
}

export async function getAll(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const safeNotes = await safeNoteService.getAllSafeNotes(userId);
  res.status(200).send(safeNotes);
}

export async function getById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);
  const safeNote = await safeNoteService.getSafeNoteById(id, userId);
  delete safeNote.userId;
  res.status(200).send(safeNote);
}

export async function deleteById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);

  await safeNoteService.deleteSafeNoteById(id, userId);
  res.status(200).send("Safe-note removed successfully");
}
