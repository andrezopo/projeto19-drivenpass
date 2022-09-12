import { Request, Response } from "express";
import { document } from "../types/documentTypes";
import * as documentService from "../services/documentServices";

export async function register(req: Request, res: Response) {
  const document: document = req.body;
  const userId: number = Number(res.locals.userId);
  await documentService.register(document, userId);
  res.status(201).send("Document created successfully");
}

export async function getAll(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const documents = await documentService.getAllDocuments(userId);
  res.status(200).send(documents);
}

export async function getById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);
  const document = await documentService.getDocumentById(id, userId);
  delete document.userId;
  res.status(200).send(document);
}

export async function deleteById(req: Request, res: Response) {
  const userId: number = Number(res.locals.userId);
  const id: number = Number(req.params.id);

  await documentService.deleteDocumentById(id, userId);
  res.status(200).send("Document removed successfully");
}
