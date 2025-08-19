import { extensionRouter } from './routers/extension';

// Combine feature routers here when they exist
export const appRouter = extensionRouter;

export type AppRouter = typeof appRouter;


