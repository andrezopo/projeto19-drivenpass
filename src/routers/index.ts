import { Router } from "express";
import cardsRouter from "./cardsRouter";
import credentialsRouter from "./credentialsRouter";
import safeNotesRouter from "./safeNotesRouter";
import usersRouter from "./usersRouter";
import wifisRouter from "./wifisRouter";

const router = Router();

router.use("/", usersRouter);
router.use("/cards", cardsRouter);
router.use("/credentials", credentialsRouter);
router.use("/safe-notes", safeNotesRouter);
router.use("/wifis", wifisRouter);

export default router;
