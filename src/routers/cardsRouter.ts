import { Router } from "express";

import * as cardsController from "../controllers/cardsController";

const cardsRouter = Router();

cardsRouter.post("/register", cardsController.register);
cardsRouter.get("/", cardsController.getAll);
cardsRouter.get("/:cardId", cardsController.getById);
cardsRouter.delete("/:cardId", cardsController.deleteById);

export default cardsRouter;
