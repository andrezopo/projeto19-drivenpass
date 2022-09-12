import { Documents } from "@prisma/client";

export type document = Omit<Documents, "id" | "userId">;
