import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsInput() {
  const [myWiter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContent, setMyContent] = useState("");

  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1");
    const result = await qqq({
      variables: {
        writer: myWiter,
        title: myTitle,
        contents: myContent,
      },
    });
    // console.log(result.data.title);
    // setAaa(result.data.title);
    console.log(result.data.createBoard.message);
    console.log(result.data.createBoard._id);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);
  };

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value);
  };
  const onChangeMyContent = (event) => {
    setMyContent(event.target.value);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeMyWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeMyContent} />
      <br />
      <button onClick={zzz}>Graphql-API 요청하기!!!</button>
      <div>{aaa}</div>
    </>
  );
}

//zzz는 이벤트핸들러 함수
//함수가 중복되면 에러발생할 수 있음. 막으려면 함수를 const로
