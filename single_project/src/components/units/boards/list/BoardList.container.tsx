import { useRouter } from "next/router";
import BoardsListUI from "./BoardList.presenter";
import PaginationUI from "./Pagination.presenter";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function BoardList() {
  const router = useRouter();

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  // 바로 리패치, data가 바껴짐.

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <>
      <BoardsListUI
        data={data}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      ></BoardsListUI>
    </>
  );
}
