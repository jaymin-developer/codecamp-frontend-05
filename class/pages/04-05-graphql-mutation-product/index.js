import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_Product = gql`
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
  const [seller, setSeller] = useState("");
  const [myProduct, setMyProduct] = useState("");
  const [myProductDetail, setMyProductDetail] = useState("");
  const [myProductPrice, setMyProductPrice] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const [createProduct] = useMutation(CREATE_Product);

  const onClickSubmit = async () => {
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
    setSubmitMessage(result.data.createProduct.message);
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
      <input type="number" />
      <button onClick={onClickSubmit}>상품 등록하기</button>
      <div>{submitMessage}</div>
    </>
  );
}

//zzz는 이벤트핸들러 함수
//함수가 중복되면 에러발생할 수 있음. 막으려면 함수를 const로
