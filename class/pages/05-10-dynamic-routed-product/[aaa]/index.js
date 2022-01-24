import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;
// 아이디로 가져온 걸 가지고 조회하고 데이터 출력

export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.aaa },
  });
  // 해당 상품 아이디로 조회 1번

  console.log(data);

  return (
    <div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>상품가격: {data?.fetchProduct?.price}</div>
    </div>
  );
}
