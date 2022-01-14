import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export default function dynamicRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.ProductList },
  });

  return (
    <>
      <div>판매자 : {data?.fetchProduct?.seller}</div>
      <div>상품명 : {data && data.fetchProduct?.name}</div>
      <div>상품내용 : {data && data.fetchProduct?.detail}</div>
      <div>상품가격 : {data?.fetchProduct?.price}</div>
      <div>작성일자 : {data && data.fetchProduct?.createdAt}</div>
    </>
  );
}

// 조건부 렌더링 data && data.fetchBoard.writer data가 잇으면
// data? = data && data 옵셔널 체이닝
// 인자 앞에 ?.는 있냐 없냐 체크하고 보여준다. 삭제해도 데이터는 남아져있으니
