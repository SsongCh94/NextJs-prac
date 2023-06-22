import Link from 'next/link';
import styles from './page.module.css';

const productList = ['shirt', 'pants', 'skirt', 'shoes'];

export default function Products() {
	return (
		<>
			<h1>제품 소개 페이지</h1>
			<ul>
				{productList.map((item, idx) => {
					return (
						<li
							key={idx}
							className={styles.listLink}>
							<Link href={`/products/${item}`}> {item}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
