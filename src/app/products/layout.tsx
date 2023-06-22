import Link from 'next/link';
import styles from './layout.module.css';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className={styles.nav}>
				<Link href='/womens'>여성옷</Link>
				<Link href='/mans'>남성옷</Link>
			</nav>
			<section className={styles.product}>{children}</section>
		</>
	);
}
