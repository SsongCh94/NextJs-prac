import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
	id: string;
	name: string;
	price: number;
};

// 비동기함수로, products.json 파일에서 json객체를 읽어와 파싱하여 리턴해준다.
export async function getProducts(): Promise<Product[]> {
	const filepath = path.join(process.cwd(), 'data', 'products.json');
	const data = await fs.readFile(filepath, 'utf-8');
	return JSON.parse(data);
}

// 비동기함수로, getProducts에서 읽어온 상품 목록을 받아서, 매개변수로 받은 slug 값이 상품의 id와 일치하는 상품이 있을경우 일치하는 상품을 반환하고, 없을 경우 undefined를 반환한다.
export async function getProduct(id: string): Promise<Product | undefined> {
	const products = await getProducts();
	return products.find((item) => item.id === id);
}

// path.join(process.cwd(), 'data', 'products.json'):

// path.join: 여러 개의 문자열 인수를 결합하여 하나의 경로 문자열을 만드는 Node.js 내장 함수입니다.
// process.cwd(): Node.js 환경에서 현재 작업 디렉토리를 가리킵니다. 이 함수를 호출하면 실행 중인 Node.js 프로세스의 현재 작업 디렉토리 경로를 문자열로 반환합니다.
// 따라서 path.join(process.cwd(), 'data', 'products.json')는 현재 작업 디렉토리에 있는 'data' 폴더 내부의 'products.json' 파일을 가리키는 경로를 생성합니다.
// fs.readFile(filepath, 'utf-8'):

// 이 코드는 Node.js의 파일시스템 모듈을 이용하여 파일을 읽습니다.
// 'utf-8' 인코딩으로 파일을 읽기 때문에 결과는 문자열입니다.
// JSON.parse(data):

// JSON.parse는 JSON 문자열을 JavaScript 객체로 변환합니다.
// 여기서 'data'는 'products.json' 파일의 내용을 담고 있는 문자열입니다.
// getProduct(id: string): Promise<Product | undefined>:

// 이 함수의 입력은 id라는 문자열입니다. 이 id는 찾고자 하는 제품의 id와 일치해야 합니다.
// 출력은 Product 객체 또는 undefined입니다. id와 일치하는 제품이 있으면 해당 Product 객체를, 없으면 undefined를 반환합니다.
