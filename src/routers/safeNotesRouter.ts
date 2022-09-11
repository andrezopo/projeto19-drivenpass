import { Router } from "express";

import * as safeNotesController from "../controllers/safeNotesController";

const safeNotesRouter = Router();

safeNotesRouter.post("/register", safeNotesController.register);
safeNotesRouter.get("/", safeNotesController.getAll);
safeNotesRouter.get("/:cardId", safeNotesController.getById);
safeNotesRouter.delete("/:cardId", safeNotesController.deleteById);

export default safeNotesRouter;
