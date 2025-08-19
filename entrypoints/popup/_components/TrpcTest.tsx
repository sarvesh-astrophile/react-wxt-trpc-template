import { useEffect, useState } from 'react';
import { createChromeTrpcClient } from '@/src/trpc/client';

export function TrpcTest() {
	const [ping, setPing] = useState<string>('');
	const [greet, setGreet] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const client = createChromeTrpcClient();
		(async () => {
			try {
				setLoading(true);
				const pong: string = await client.ping.query();
				setPing(pong);
				const greeting: string = await client.greet.query({ name: 'WXT' });
				setGreet(greeting);
			} catch (e) {
				setError(String(e));
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<section className="mt-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
			<div className="mb-2 flex items-center justify-between">
				<h3 className="text-sm font-medium text-slate-800 dark:text-slate-100">tRPC Integration Test</h3>
				{loading ? (
					<span className="text-xs text-slate-500">Loading…</span>
				) : (
					<span className="text-xs text-emerald-600">Ready</span>
				)}
			</div>
			<div className="space-y-2">
				<div className="flex items-center gap-2 text-sm">
					<span className="font-semibold">tRPC ping:</span>
					{loading ? (
						<span className="text-slate-500">⏳ Loading…</span>
					) : (
						<span className={ping ? 'text-emerald-600' : 'text-red-600'}>{ping || 'Failed'}</span>
					)}
				</div>
				<div className="flex items-center gap-2 text-sm">
					<span className="font-semibold">tRPC greet:</span>
					{loading ? (
						<span className="text-slate-500">⏳ Loading…</span>
					) : (
						<span className={greet ? 'text-emerald-600' : 'text-red-600'}>{greet || 'Failed'}</span>
					)}
				</div>
			</div>
			{error && (
				<div className="mt-2 rounded-md bg-red-50 p-2 text-xs text-red-700">Error: {error}</div>
			)}
		</section>
	);
}
