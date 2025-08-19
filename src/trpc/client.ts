import { createTRPCClient } from '@trpc/client';
import { chromeLink } from 'trpc-chrome/link';
import type { AppRouter } from './router';

export function createChromeTrpcClient() {
	const port = chrome.runtime.connect({ name: 'trpc' });
	return createTRPCClient<AppRouter>({
		links: [chromeLink({ port })],
	});
}


