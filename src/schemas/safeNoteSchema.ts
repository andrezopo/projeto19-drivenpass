import joi from "joi";
import { SafeNotes } from "@prisma/client";

const safeNoteSchema = joi.object<Partial<SafeNotes>>({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required(),
});

export default safeNoteSchema;
