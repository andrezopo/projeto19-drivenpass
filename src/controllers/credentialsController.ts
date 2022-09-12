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
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);
  const credential = await credentialService.getCredentialById(id, userId);
  delete credential.userId;
  res.status(200).send(credential);
}

export async function deleteById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);

  await credentialService.deleteCredentialById(id, userId);
  res.status(200).send("Credential removed successfully");
}
