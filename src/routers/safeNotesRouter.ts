import { Router } from "express";

import * as safeNotesController from "../controllers/safeNotesController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import safeNoteSchema from "../schemas/safeNoteSchema";

const safeNotesRouter = Router();

safeNotesRouter.post(
  "/register",
  validateSchema(safeNoteSchema),
  validateToken,
  safeNotesController.register
);
safeNotesRouter.get("/", validateToken, safeNotesController.getAll);
safeNotesRouter.get("/:cardId", validateToken, safeNotesController.getById);
safeNotesRouter.delete(
  "/:cardId",
  validateToken,
  safeNotesController.deleteById
);

export default safeNotesRouter;
