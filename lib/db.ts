// The purpose of this file is to prevent the overflow error 
// of Prisma in development mode vs production mode. In development
// mode, the prisma client is instantiated once and then reused
// in production mode, the prisma client is instantiated for each
// request. This is a workaround for the overflow error.

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
