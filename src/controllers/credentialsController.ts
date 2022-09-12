import { Request, Response } from "express";
import { credential } from "../types/credentialTypes";
import * as credentialService from "../services/credentialService";

export async function register(req: Request, res: Response) {
  const credential: credential = req.body;
  const userId: number = res.locals.userId;
  await credentialService.register(credential, userId);
  res.status(201).send("Credential created successfully");
}

export async function getAll(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const credentials = await credentialService.getAllCredentials(userId);
  res.status(200).send(credentials);
}

export async function getById(req: Request, res: Response) {
  res.status(200).send("Sou a rota que pega um registro por seu Id");
}

export async function deleteById(req: Request, res: Response) {
  res.status(200).send("Sou a rota que deleta um registro por seu Id");
}
