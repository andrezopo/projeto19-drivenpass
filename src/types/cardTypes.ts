import { Cards } from "@prisma/client";

export type card = Omit<Cards, "id" | "userId">;
