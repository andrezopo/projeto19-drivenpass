import joi from "joi";
import { Documents } from "@prisma/client";

const cardSchema = joi.object<Partial<Documents>>({
  completeName: joi.string().required(),
  issueDate: joi.string().required(),
  expireDate: joi.string().required(),
  registrationNumber: joi.string().required(),
  issuingBody: joi.string().required(),
  type: joi.string().valid("rg", "cnh").required(),
});

export default cardSchema;
