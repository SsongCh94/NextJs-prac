import Link from 'next/link';
import styles from './page.module.css';
import { getProducts } from '@/service/products';

export default async function Products() {
	const products = await getProducts();
	const res = await fetch('https://meowfacts.herokuapp.com', {
		next: { revalidate: 3 },
	});
	const data = await res.json();
	const factText = data.data[0];
	return (
		<>
			<h1>제품 소개 페이지</h1>
			<ul>
				{products.map((product, idx) => {
					return (
						<li
							key={idx}
							className={styles.listLink}>
							<Link href={`/products/${product.id}`}> {product.name}</Link>
						</li>
					);
				})}
			</ul>
			<article className={styles.article}>{factText}</article>
		</>
	);
}
