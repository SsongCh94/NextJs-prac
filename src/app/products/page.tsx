import Link from 'next/link';
import styles from './page.module.css';
import { getProducts } from '@/service/products';

export default async function Products() {
	const products = await getProducts();
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
		</>
	);
}
