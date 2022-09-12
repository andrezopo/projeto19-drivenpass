import { Router } from "express";

import * as cardsController from "../controllers/cardsController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import cardSchema from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post(
  "/register",
  validateSchema(cardSchema),
  validateToken,
  cardsController.register
);
cardsRouter.get("/", validateToken, cardsController.getAll);
cardsRouter.get("/:cardId", validateToken, cardsController.getById);
cardsRouter.delete("/:cardId", validateToken, cardsController.deleteById);

export default cardsRouter;
