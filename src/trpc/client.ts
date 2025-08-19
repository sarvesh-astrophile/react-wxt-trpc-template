import { createTRPCProxyClient } from '@trpc/client';
import superjson from 'superjson';
import { chromeLink } from 'trpc-chrome/link';
import type { AppRouter } from './router';

export function createChromeTrpcClient() {
	const port = chrome.runtime.connect({ name: 'trpc' });
	return createTRPCProxyClient<AppRouter>({
		links: [chromeLink({ port })],
		transformer: superjson,
	});
}


