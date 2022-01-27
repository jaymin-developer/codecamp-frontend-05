import Pagination from "../../src/components/units/14-boards-pagination/Pagination";
import Board from "../../src/components/units/14-boards-pagination/Boards";
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

export default function PaginationNextPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  // 바로 리패치, data가 바껴짐.

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <div>
      <div>페이지네이션 연습!!!</div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
      {/* 1~10페이지 */}
      {/* index + 11 이면 11~20페이지, index + 21 이면 21~30페이지 */}
      {/* <span onClick={onClickPage} id="1"> 1 </span>
                <span onClick={onClickPage} id="2"> 2 </span>
                <span onClick={onClickPage} id="3"> 3 </span> */}
    </div>
  );
}
