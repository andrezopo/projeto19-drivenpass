import joi from "joi";
import { Credentials } from "@prisma/client";

const credentialSchema = joi.object<Partial<Credentials>>({
  title: joi.string().required(),
  url: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

export default credentialSchema;
