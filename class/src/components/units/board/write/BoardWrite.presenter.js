// import { MyInput, MyButton } from "./BoardWrite.styles";
// 모두 받아오기
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자: <S.MyInput type="text" onChange={props.onChangeWriter} />
      <br />
      패스워드 : <S.MyInput type="password" onChange={props.onChangePassword} />
      <br />
      제목: <S.MyInput type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <S.MyInput type="text" onChange={props.onChangeContents} />
      <br />
      <S.MyButton onClick={props.onClikeSubmit} ggg={props.isActive}>
        등록하기
      </S.MyButton>
    </>
  );
}
