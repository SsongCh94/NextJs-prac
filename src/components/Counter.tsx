'use client';

import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);
	console.log('안녕! - 클라이언트');
	return (
		<>
			<p>{count}</p>
			<button onClick={() => setCount((pre) => pre + 1)}>숫자 증가 시키기</button>
		</>
	);
}
