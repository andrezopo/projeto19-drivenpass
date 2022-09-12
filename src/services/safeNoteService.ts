import {
  deleteById,
  getAll,
  getById,
  insert,
} from "../repositories/safeNotesRepository";
import { safeNote } from "../types/safeNoteTypes";

export async function register(safeNote: safeNote, userId: number) {
  try {
    await insert(safeNote, userId);
  } catch (err) {
    throw {
      type: "conflict",
      message: "There is already a safe-note with this title",
    };
  }
}

export async function getAllSafeNotes(userId: number) {
  const safeNotes = await getAll(userId);
  if (safeNotes.length > 0) {
    const newSafeNotes = safeNotes.map((safeNote) => {
      delete safeNote.userId;
      return safeNote;
    });
    return newSafeNotes;
  }
  return safeNotes;
}

export async function getSafeNoteById(id: number, userId: number) {
  const safeNote = await getById(id);
  if (!safeNote) {
    throw { type: "notFound", message: "Safe-note not found" };
  }
  if (safeNote.userId !== userId) {
    throw { type: "forbidden", message: "This safe-note is not yours" };
  }
  return safeNote;
}

export async function deleteSafeNoteById(id: number, userId: number) {
  const safeNote = await getById(id);
  if (!safeNote) {
    throw { type: "notFound", message: "Safe-note not found" };
  }
  if (safeNote.userId !== userId) {
    throw { type: "forbidden", message: "This safe-note is not yours" };
  }

  await deleteById(id);
}
