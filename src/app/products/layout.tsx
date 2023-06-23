import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '제품페이지',
	description: '제품을 파는 페이지',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className={styles.nav}>
				<Link href='/products/women'>여성옷</Link>
				<Link href='/products/man'>남성옷</Link>
			</nav>
			<section className={styles.product}>{children}</section>
		</>
	);
}
