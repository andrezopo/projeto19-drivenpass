import { getAll, insert } from "../repositories/credentialsRepository";
import { credential } from "../types/credentialTypes";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.SECRET);

export async function register(credential: credential, userId: number) {
  try {
    const encryptedPassword = cryptr.encrypt(credential.password);
    credential.password = encryptedPassword;
    await insert(credential, userId);
  } catch (err) {
    throw {
      type: "conflict",
      message: "There is already a credential with this title",
    };
  }
}

export async function getAllCredentials(userId: number) {
  const credentials = await getAll(userId);
  if (credentials.length > 0) {
    const decriptedCredentials = credentials.map((credential) => {
      credential.password = cryptr.decrypt(credential.password);
      return credential;
    });
    return decriptedCredentials;
  }
  return credentials;
}
