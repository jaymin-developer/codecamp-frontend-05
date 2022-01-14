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

export default function GraphqlMutationArgs() {
  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1");
    const result = await qqq({
      variables: {
        writer: "김재민 과제2",
        title: "제목2",
        contents: "내용2",
      },
    });
    // console.log(result.data.title);
    // setAaa(result.data.title);
    console.log(result.data.createBoard.message);
    console.log(result.data.createBoard.number);
    setAaa(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={zzz}>Graphql-API 요청하기!!!</button>
      <div>{aaa}</div>
    </>
  );
}

//zzz는 이벤트핸들러 함수
//함수가 중복되면 에러발생할 수 있음. 막으려면 함수를 const로