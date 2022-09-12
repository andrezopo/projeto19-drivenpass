import {
  deleteById,
  getAll,
  getById,
  insert,
} from "../repositories/documentsRepository";
import { document } from "../types/documentTypes";

export async function register(document: document, userId: number) {
  await insert(document, userId);
}

export async function getAllDocuments(userId: number) {
  const documents = await getAll(userId);
  if (documents.length > 0) {
    const newDocuments = documents.map((document) => {
      delete document.userId;
      delete document.type;
      return document;
    });
    return newDocuments;
  }
  return documents;
}

export async function getDocumentById(id: number, userId: number) {
  const document = await getById(id);
  if (!document) {
    throw { type: "notFound", message: "Document not found" };
  }
  if (document.userId !== userId) {
    throw { type: "forbidden", message: "This document is not yours" };
  }
  delete document.type;
  return document;
}

export async function deleteDocumentById(id: number, userId: number) {
  const document = await getById(id);
  if (!document) {
    throw { type: "notFound", message: "Document not found" };
  }
  if (document.userId !== userId) {
    throw { type: "forbidden", message: "This document is not yours" };
  }

  await deleteById(id);
}
