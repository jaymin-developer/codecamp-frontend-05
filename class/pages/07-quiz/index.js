import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_PRODUCT = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;

export default function MapCheckboxPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCT);
  // const [checked, setChecked] = useState(false);
  // const [buttonId, setButtonId] = useState("");
  const [select, setSelect] = useState([]);

  function onChangeCheck(event) {
    // setChecked(event.target.checked);
    if (event.target.checked) {
      setSelect(select.concat(event.target.id));
    } else {
      select.splice(select.indexOf(event.target.id), 1);
    }
  }

  const onClickDelete = (event) => {
    if (select.includes(event.target.id)) {
      deleteProduct({
        variables: { productId: event.target.id },
        refetchQueries: [{ query: FETCH_PRODUCT }],
      });
    }
  };

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input id={el._id} type="checkbox" onChange={onChangeCheck} />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
