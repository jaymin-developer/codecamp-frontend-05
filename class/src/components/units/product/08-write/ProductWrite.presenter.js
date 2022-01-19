import * as S from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      <h1>상품 {props.isEdit ? "수정하기" : "등록하기"}</h1>
      상품명: <S.MyInput type="text" onChange={props.onChangeName} />
      <br />
      상품내용: <S.MyInput type="text" onChange={props.onChangeDetail} />
      <br />
      상품가격: <S.MyInput type="text" onChange={props.onChangePrice} />
      <br />
      <S.MyButton
        onClick={
          props.isEdit ? props.RoutingProductEdit : props.RoutingProductDetail
        }
        ggg={props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.MyButton>
      {/* {props.isEdit ? (
                <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>
            ) : (
                <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>
            )}

            {props.isEdit && <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>}
            {!props.isEdit && <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>} */}
    </>
  );
}
