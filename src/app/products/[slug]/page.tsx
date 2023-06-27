import NotFoundPage from '@/app/not-found';
import { getProduct, getProducts } from '@/service/products';
import Image, { StaticImageData } from 'next/image';

type Props = {
	params: {
		slug: string;
	};
};

// metadata title을 정해주는 함수, description은 없기 때문에 상위 layout의 description을 출력한다.
// 함정은.. generateStaticParams 함수에서 slug를 product의 id로 지정해줬기 때문에, '제품의 이름 : {제품이름}' 이 아닌 '제품의 이름 : {제품의 id}' 가 나온다.
export function generateMetadata({ params: { slug } }: Props) {
	return {
		title: `제품의 이름: ${slug}`,
	};
}

// async 함수로, promise 객체인 getProduct를 받고, product가 없을 시 notFound페이지, 있을 시 product의 name 설명 페이지를 출력한다.
export default async function ProductPage({ params: { slug } }: Props) {
	const product = await getProduct(slug);

	if (!product) {
		return NotFoundPage();
	}

	return (
		<>
			<h1>{product?.name} 제품 설명 페이지</h1>
			<Image
				src={`/images/${product?.image}`}
				alt={product?.name}
				width={300}
				height={300}
			/>
		</>
	);
}

// SSG 를 위한 코드. async 비동기함수이고, getProducts promise 객체를 await로 받고, map 메서드로 product의 id를 추출하여 slug에 대입해준다.
// 페이지를 프리렌더링 하기 위한 함수이다.
export async function generateStaticParams() {
	const products = await getProducts();
	return products.map((product) => ({
		slug: product.id,
	}));
}
