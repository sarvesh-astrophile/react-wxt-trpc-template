import { useEffect, useState } from 'react';
import { createChromeTrpcClient } from '@/src/trpc/client';

export function TrpcTest() {
	const [ping, setPing] = useState<string>('');
	const [greet, setGreet] = useState<string>('');
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const client = createChromeTrpcClient();
		client.ping.query()
			.then((res) => setPing(res))
			.catch((e) => setError(String(e)));
		client.greet.query({ name: 'WXT' })
			.then((res) => setGreet(res))
			.catch((e) => setError(String(e)));
	}, []);

	return (
		<div style={{ display: 'grid', gap: 8 }}>
			<div>tRPC ping: {ping || '...'}</div>
			<div>tRPC greet: {greet || '...'}</div>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</div>
	);
}


