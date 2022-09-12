import { Router } from "express";

import * as credentialsController from "../controllers/credentialsController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import credentialSchema from "../schemas/credentialSchema";

const credentialsRouter = Router();

credentialsRouter.post(
  "/register",
  validateSchema(credentialSchema),
  validateToken,
  credentialsController.register
);
credentialsRouter.get("/", validateToken, credentialsController.getAll);
credentialsRouter.get("/:id", validateToken, credentialsController.getById);
credentialsRouter.delete(
  "/:id",
  validateToken,
  credentialsController.deleteById
);

export default credentialsRouter;
