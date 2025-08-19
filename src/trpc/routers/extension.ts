import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

const t = initTRPC.create({
	transformer: superjson,
});

export const extensionRouter = t.router({
	ping: t.procedure.query(() => {
		return 'pongiasdfasdfasdfasdf';
	}),
	greet: t.procedure.input(z.object({ name: z.string().min(1) })).query(({ input }) => {
		return `Hello, ${input.name}!`;
	}),
});

export type ExtensionRouter = typeof extensionRouter;


