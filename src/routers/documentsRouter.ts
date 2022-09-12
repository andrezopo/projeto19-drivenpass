import { Router } from "express";

import * as documentsController from "../controllers/documentsController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import documentSchema from "../schemas/documentSchema";

const documentsRouter = Router();

documentsRouter.post(
  "/register",
  validateSchema(documentSchema),
  validateToken,
  documentsController.register
);
documentsRouter.get("/", validateToken, documentsController.getAll);
documentsRouter.get("/:id", validateToken, documentsController.getById);
documentsRouter.delete("/:id", validateToken, documentsController.deleteById);

export default documentsRouter;
