import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  res.status(200).send("Sou a rota que registra");
}

export async function getAll(req: Request, res: Response) {
  res.status(200).send("Sou a rota que busca todos os registros");
}

export async function getById(req: Request, res: Response) {
  res.status(200).send("Sou a rota que pega um registro por seu Id");
}

export async function deleteById(req: Request, res: Response) {
  res.status(200).send("Sou a rota que deleta um registro por seu Id");
}
