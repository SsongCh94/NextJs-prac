import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: '제품 판매 사이트',
	description: '제품 팔지도',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header className={styles.header}>
					<h1>Demo Note</h1>
					<nav className={styles.nav}>
						<Link href='/'>Home</Link>
						<Link href='/contact'>Contact</Link>
						<Link href='/about'>About</Link>
						<Link href='/products'>Products</Link>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
