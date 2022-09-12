import { Credentials } from "@prisma/client";

export type credential = Omit<Credentials, "id" | "userId">;
