import { Users } from "@prisma/client";

export type userType = Omit<Users, "id">;
