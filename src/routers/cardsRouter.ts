import { Router } from "express";

import * as cardsController from "../controllers/cardsController";
import validateSchema from "../middlewares/validateSchema";
import cardSchema from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post(
  "/register",
  validateSchema(cardSchema),
  cardsController.register
);
cardsRouter.get("/", cardsController.getAll);
cardsRouter.get("/:cardId", cardsController.getById);
cardsRouter.delete("/:cardId", cardsController.deleteById);

export default cardsRouter;
