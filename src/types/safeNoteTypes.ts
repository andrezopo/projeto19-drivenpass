import { SafeNotes } from "@prisma/client";

export type safeNote = Omit<SafeNotes, "id" | "userId">;
