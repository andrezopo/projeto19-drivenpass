import joi from "joi";
import { Wifis } from "@prisma/client";

const wifiSchema = joi.object<Partial<Wifis>>({
  title: joi.string().required(),
  wifiName: joi.string().required(),
  password: joi.string().required(),
});

export default wifiSchema;
