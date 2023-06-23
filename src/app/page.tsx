import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
	console.log('안녕! - 서버');
	return (
		<>
			<h1>홈페이지입니다.</h1>
			<Counter />
		</>
	);
}
