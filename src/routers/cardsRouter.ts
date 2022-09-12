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
cardsRouter.get("/:id", validateToken, cardsController.getById);
cardsRouter.delete("/:id", validateToken, cardsController.deleteById);

export default cardsRouter;
