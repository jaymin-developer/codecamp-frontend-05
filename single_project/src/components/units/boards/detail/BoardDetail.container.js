import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [limitNumber, setLimitNumber] = useState(0);

  const [errorComment, setErrorComment] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.Detail) },
  });

  const onChangeComment = (event) => {
    setComment(event.target.value);
    if (comment !== "" && event.target.value.length <= 100) {
      setLimitNumber(event.target.value.length);
      setErrorComment("");
    } else if (event.target.value.length > 100) {
      alert("100자 이하로 작성해주세요.");
      setLimitNumber(event.target.value.length);
      setErrorComment("100자 이하로 작성해주세요.");
    }
  };

  return (
    <BoardDetailUI
      data={data}
      limitNumber={limitNumber}
      errorComment={errorComment}
      onChangeComment={onChangeComment}
    ></BoardDetailUI>
  );
}

// import { useState } from "react";
// import { useRouter } from "next/router";
// import { useQuery, gql } from "@apollo/client";
// import BoardDetailUI from "./BoardDetail.presenter";
// import { FETCH_BOARD } from "./BoardDetail.queries";

// const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       title
//       contents
//       createdAt
//     }
//   }
// `;

// export default function BoardDetail() {
//   const router = useRouter();
//   const [comment, setComment] = useState("");
//   const [limitNumber, setLimitNumber] = useState(0);

//   const [errorComment, setErrorComment] = useState("");

//   const { data } = useQuery(FETCH_BOARD, {
//     variables: { boardId: String(router.query.Detail) },
//   });

//   const onChangeComment = (event) => {
//     setComment(event.target.value);
//     if (comment !== "" && event.target.value.length <= 100) {
//       setLimitNumber(event.target.value.length);
//       setErrorComment("");
//     } else if (event.target.value.length > 100) {
//       alert("100자 이하로 작성해주세요.");
//       setLimitNumber(event.target.value.length);
//       setErrorComment("100자 이하로 작성해주세요.");
//     }
//   };

//   return (
//     <BoardDetailUI
//       data={data}
//       onChangeComent={onChangeComment}
//       limitNumber={limitNumber}
//       errorComment={errorComment}
//     ></BoardDetailUI>
//   );
// }
