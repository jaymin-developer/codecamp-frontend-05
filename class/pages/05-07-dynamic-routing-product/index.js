import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProduct() {
  const router = useRouter();

  // const onClickMoveProduct = () => {
  //   const result = createProduct;
  //   router.push("/05-08-dynamic-routed-product/" + result.productId);
  // };

  const [seller, setSeller] = useState("");
  const [myProduct, setMyProduct] = useState("");
  const [myProductDetail, setMyProductDetail] = useState("");
  const [myProductPrice, setMyProductPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: myProduct,
            detail: myProductDetail,
            price: Number(myProductPrice),
            // Number로 먹히기
          },
        },
      });
      router.push(
        `/05-08-dynamic-routed-product/${result.data.createProduct._id}`
      );
    } catch (error) {
      console.log(error.message);
    } finally {
    }

    // try 해서 오류가 나오면 catch 실행, 에러메시지, finally는 실행, 실패 하더라도 띄울때

    // onClickMoveProduct();

    // const apple = 3;
    // const banana = 10;
    // console.log("철수는 사과를" + apple + "개 가지고 있고, 바나나를" + banana + "개 가지고 있어요.")
    // console.log(
    //   `철수는 사과를 ${apple}개 가지고 있고, 바나나를 ${banana}개 가지고 있어요.`
    // ); // 템플릿 리터럴
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeMyproduct = (event) => {
    setMyProduct(event.target.value);
  };
  const onChangeMyproductDetail = (event) => {
    setMyProductDetail(event.target.value);
  };
  const onChangeProductPrice = (event) => {
    setMyProductPrice(event.target.value);
  };

  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      <br />
      상품명 : <input type="text" onChange={onChangeMyproduct} />
      <br />
      상품내용 : <input type="text" onChange={onChangeMyproductDetail} />
      <br />
      상품가격 : <input type="text" onChange={onChangeProductPrice} />
      <br />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}

//zzz는 이벤트핸들러 함수
//함수가 중복되면 에러발생할 수 있음. 막으려면 함수를 const로
