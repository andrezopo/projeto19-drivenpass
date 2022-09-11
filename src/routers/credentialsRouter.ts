import { Router } from "express";

import * as credentialsController from "../controllers/credentialsController";
import validateSchema from "../middlewares/validateSchema";
import credentialSchema from "../schemas/credentialSchema";

const credentialsRouter = Router();

credentialsRouter.post(
  "/register",
  validateSchema(credentialSchema),
  credentialsController.register
);
credentialsRouter.get("/", credentialsController.getAll);
credentialsRouter.get("/:cardId", credentialsController.getById);
credentialsRouter.delete("/:cardId", credentialsController.deleteById);

export default credentialsRouter;
