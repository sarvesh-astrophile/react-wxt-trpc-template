import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { extensionRouter } from './routers/extension';

export const trpc = initTRPC.create({
	transformer: superjson,
});

// Combine feature routers here when they exist
export const appRouter = extensionRouter;

export type AppRouter = typeof appRouter;


