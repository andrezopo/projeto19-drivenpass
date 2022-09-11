import joi from "joi";
import { userType } from "../types/userTypes";

const signUpSchema = joi.object<userType>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

export default signUpSchema;
