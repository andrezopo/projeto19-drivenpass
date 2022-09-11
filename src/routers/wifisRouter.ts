import { Router } from "express";

import * as wifiController from "../controllers/wifiController";

const wifisRouter = Router();

wifisRouter.post("/register", wifiController.register);
wifisRouter.get("/", wifiController.getAll);
wifisRouter.get("/:cardId", wifiController.getById);
wifisRouter.delete("/:cardId", wifiController.deleteById);

export default wifisRouter;
