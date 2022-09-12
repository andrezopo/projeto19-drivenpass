import { Request, Response } from "express";
import { wifi } from "../types/wifiTypes";
import * as wifiService from "../services/wifiServices";

export async function register(req: Request, res: Response) {
  const wifi: wifi = req.body;
  const userId: number = res.locals.userId;
  await wifiService.register(wifi, userId);
  res.status(201).send("Wi-fi register created successfully");
}

export async function getAll(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const wifis = await wifiService.getAllWifis(userId);
  res.status(200).send(wifis);
}

export async function getById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);
  const wifi = await wifiService.getWifiById(id, userId);
  delete wifi.userId;
  res.status(200).send(wifi);
}

export async function deleteById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);

  await wifiService.deleteWifiById(id, userId);
  res.status(200).send("Wi-fi register removed successfully");
}
