import BoardList from "../../../src/components/units/board/list/BoardList.container";

export default function DynamicBoardWrite() {
  return <BoardList></BoardList>;
}

// import { useRouter } from "next/router";
// import { useQuery, gql } from "@apollo/client";

// const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       title
//       contents
//     }
//   }
// `;

// export default function DynamicBoardRead() {
//   const router = useRouter();

//   const { data } = useQuery(FETCH_BOARD, {
//     variables: { boardId: String(router.query.number) },
//   });

//   console.log(data);

//   return (
//     <div>
//       <div>작성자: {data?.fetchBoard?.writer}</div>
//       <div>제목: {data?.fetchBoard?.title}</div>
//       <div>내용: {data?.fetchBoard?.contents}</div>
//     </div>
//   );
// }
