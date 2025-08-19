import { useEffect, useState } from 'react';
import { createChromeTrpcClient } from '@/src/trpc/client';

export function TrpcTest() {
	const [ping, setPing] = useState<string>('');
	const [greet, setGreet] = useState<string>('');
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const client = createChromeTrpcClient();
		(async () => {
			try {
				const pongconst: string = await client.ping.query();
				setPing(pongconst);
				const greetingconst: string = await client.greet.query({ name: 'WXTasdfsai' });
				setGreet(greetingconst);
			} catch (e) {
				setError(String(e));
			}
		})();
	}, []);

	return (
		<div style={{ display: 'grid', gap: 8 }}>
			<div>tRPC ping: {ping || '...'}</div>
			<div>tRPC greet: {greet || '...'}</div>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</div>
	);
}


