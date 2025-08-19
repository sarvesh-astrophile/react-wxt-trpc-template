import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const extensionRouter = t.router({
	ping: t.procedure.query(() => {
		return 'pong';
	}),
	greet: t.procedure.input(z.object({ name: z.string().min(1) })).query(({ input }) => {
		return `Hello, ${input.name}!`;
	}),
});

export type ExtensionRouter = typeof extensionRouter;


