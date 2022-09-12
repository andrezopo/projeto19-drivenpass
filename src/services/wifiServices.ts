import {
  deleteById,
  getAll,
  getById,
  insert,
} from "../repositories/wifiRepository";
import { wifi } from "../types/wifiTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.SECRET);

export async function register(wifi: wifi, userId: number) {
  const encryptedPassword = cryptr.encrypt(wifi.password);
  wifi.password = encryptedPassword;
  await insert(wifi, userId);
}

export async function getAllWifis(userId: number) {
  const wifis = await getAll(userId);
  if (wifis.length > 0) {
    const decriptedWifis = wifis.map((wifi) => {
      wifi.password = cryptr.decrypt(wifi.password);
      delete wifi.userId;
      return wifi;
    });
    return decriptedWifis;
  }
  return wifis;
}

export async function getWifiById(id: number, userId: number) {
  const wifi = await getById(id);
  if (!wifi) {
    throw { type: "notFound", message: "Wi-fi not found" };
  }
  if (wifi.userId !== userId) {
    throw { type: "forbidden", message: "This wi-fi register is not yours" };
  }
  wifi.password = cryptr.decrypt(wifi.password);
  return wifi;
}

export async function deleteWifiById(id: number, userId: number) {
  const wifi = await getById(id);
  if (!wifi) {
    throw { type: "notFound", message: "Wi-fi not found" };
  }
  if (wifi.userId !== userId) {
    throw { type: "forbidden", message: "This wi-fi register is not yours" };
  }

  await deleteById(id);
}
