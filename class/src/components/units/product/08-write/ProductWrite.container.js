import axios from "axios";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PROUDCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import { useRouter } from "next/router";

export default function ProductWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PROUDCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const RoutingProductDetail = async () => {
    const result = await createProduct({
      variables: {
        seller: "jgjg",
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    router.push(`/08-06-Product/${result.data.createProduct._id}`);
  };

  const RoutingProductEdit = async () => {
    console.log("수정하기를 클릭하셨군요!!!");
    const result = await updateProduct({
      variables: {
        productId: router.query.myid,
        updateProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    router.push(`/08-06-Product/${router.query.myid}`);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value && detail && price) {
      setIsActive(true);
    }
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (name && event.target.value && price) {
      setIsActive(true);
    }
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (name && detail && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <ProductWriteUI
      RoutingProductDetail={RoutingProductDetail}
      RoutingProductEdit={RoutingProductEdit}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
