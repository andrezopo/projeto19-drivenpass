import { Router } from "express";

import * as safeNotesController from "../controllers/safeNotesController";
import validateSchema from "../middlewares/validateSchema";
import safeNoteSchema from "../schemas/safeNoteSchema";

const safeNotesRouter = Router();

safeNotesRouter.post(
  "/register",
  validateSchema(safeNoteSchema),
  safeNotesController.register
);
safeNotesRouter.get("/", safeNotesController.getAll);
safeNotesRouter.get("/:cardId", safeNotesController.getById);
safeNotesRouter.delete("/:cardId", safeNotesController.deleteById);

export default safeNotesRouter;
