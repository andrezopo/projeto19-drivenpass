import joi from "joi";
import { Cards } from "@prisma/client";

const cardSchema = joi.object<Partial<Cards>>({
  title: joi.string().required(),
  number: joi.string().required(),
  cardholderName: joi.string().required(),
  securityCode: joi.string().required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debit", "both").required(),
});

export default cardSchema;
