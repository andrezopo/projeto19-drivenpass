import joi from "joi";
import { userType } from "../types/userTypes";

const signInSchema = joi.object<userType>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default signInSchema;
