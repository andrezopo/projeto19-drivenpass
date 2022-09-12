import { Router } from "express";

import * as wifiController from "../controllers/wifiController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import wifiSchema from "../schemas/wifiSchema";

const wifisRouter = Router();

wifisRouter.post(
  "/register",
  validateSchema(wifiSchema),
  validateToken,
  wifiController.register
);
wifisRouter.get("/", validateToken, wifiController.getAll);
wifisRouter.get("/:id", validateToken, wifiController.getById);
wifisRouter.delete("/:id", validateToken, wifiController.deleteById);

export default wifisRouter;
