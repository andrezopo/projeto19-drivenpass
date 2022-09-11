import { Router } from "express";

import * as credentialsController from "../controllers/credentialsController";

const credentialsRouter = Router();

credentialsRouter.post("/register", credentialsController.register);
credentialsRouter.get("/", credentialsController.getAll);
credentialsRouter.get("/:cardId", credentialsController.getById);
credentialsRouter.delete("/:cardId", credentialsController.deleteById);

export default credentialsRouter;
