// import { useRouter } from "next/router";

// export default function dynamicRoutedPage() {
//   const router = useRouter();

//   return (
//     <>
//       <div>{router.query.boardList}번 페이지 이동 완료!!!</div>
//     </>
//   );
// }

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function dynamicRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.boardList) },
  });

  return (
    <>
      <div>{router.query.boardList}번 페이지 이동 완료!!!</div>;
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div>
    </>
  );
}

// 조건부 렌더링 data && data.fetchBoard.writer data가 잇으면
// data? 옵셔널 체이닝
