import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
// import { FETCH_BOARD } from "./BoardList.queries";
import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.number) },
  });

  return <BoardListUI data={data}></BoardListUI>;
}
