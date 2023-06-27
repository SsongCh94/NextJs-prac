import Link from 'next/link';
import './globals.css';
import { Open_Sans, Nanum_Gothic } from 'next/font/google';
import styles from './layout.module.css';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

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
			<body className={sans.className}>
				<header className={styles.header}>
					<h1 className={gothic.className}>Demo Note</h1>
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
