import { Router } from "express";
import { signIn, signUp } from "../controllers/usersController";
import validateSchema from "../middlewares/validateSchema";
import signInSchema from "../schemas/signInSchema";
import signUpSchema from "../schemas/signUpSchema";

const usersRouter = Router();

usersRouter.post("/signup", validateSchema(signUpSchema), signUp);

usersRouter.post("/signin", validateSchema(signInSchema), signIn);

export default usersRouter;
