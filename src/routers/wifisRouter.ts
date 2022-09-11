import { Router } from "express";

import * as wifiController from "../controllers/wifiController";
import validateSchema from "../middlewares/validateSchema";
import wifiSchema from "../schemas/wifiSchema";

const wifisRouter = Router();

wifisRouter.post(
  "/register",
  validateSchema(wifiSchema),
  wifiController.register
);
wifisRouter.get("/", wifiController.getAll);
wifisRouter.get("/:cardId", wifiController.getById);
wifisRouter.delete("/:cardId", wifiController.deleteById);

export default wifisRouter;
