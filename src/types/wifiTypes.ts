import { Wifis } from "@prisma/client";

export type wifi = Omit<Wifis, "id" | "userId">;
