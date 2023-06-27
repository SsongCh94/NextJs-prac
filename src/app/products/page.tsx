import Link from 'next/link';
import styles from './page.module.css';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';
import Image from 'next/image';

export default async function Products() {
	const products = await getProducts();

	return (
		<>
			<h1>제품 소개 페이지</h1>
			<Image
				src={clothesImage}
				alt='Cat'
			/>
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
			<MeowArticle />
		</>
	);
}
