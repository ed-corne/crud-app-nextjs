// file to connect to the database
//using the database created by prisma

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// is too easy to connect to the database
// becouse in folder "prisma" was created
// the database and configuration.