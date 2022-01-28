import { gql, useQuery } from "@apollo/client";
import * as S from "./BoardList.styles";
import PaginationUI from "./Pagination.presenter";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function BoardsListUI(props) {
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  console.log(dataBoardsCount);

  return (
    <S.Wrapper>
      <S.BestTitle>베스트 게시글</S.BestTitle>
      <S.BestList>
        <S.BestBoard></S.BestBoard>
        <S.BestBoard></S.BestBoard>
        <S.BestBoard></S.BestBoard>
        <S.BestBoard></S.BestBoard>
      </S.BestList>
      <S.ListWrapper>
        <S.ListTop>
          <S.SearchInput
            type="text"
            placeholder="제목을 검색해주세요."
          ></S.SearchInput>
          <S.SearchDate>YYYY.MM.DD - YYYY.MM.DD</S.SearchDate>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.ListTop>
        <S.Box>
          <S.SubmitButton onClick={props.onClickMoveToBoardNew}>
            게시글 등록하기
          </S.SubmitButton>
        </S.Box>
        <S.ListBody>
          <S.Row>
            {/* 인덱스를 키로 주지 말자 */}
            <S.Number>번호</S.Number>
            <S.Title>제목</S.Title>
            <S.Writer>작성자</S.Writer>
            <S.CreatedAt>날짜</S.CreatedAt>
          </S.Row>
          {data?.fetchBoards.map((el, index) => (
            <S.Row1 key={el._id}>
              {/* 인덱스를 키로 주지 말자 */}
              <S.Number1>{dataBoardsCount?.fetchBoardsCount - index}</S.Number1>
              <S.Title1 id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </S.Title1>
              <S.Writer1>{el.writer}</S.Writer1>
              <S.CreatedAt1>{el.createdAt.slice(0, 10)}</S.CreatedAt1>
            </S.Row1>
          ))}
        </S.ListBody>
        <S.ListFoot>
          <PaginationUI refetch={refetch} lastPage={lastPage}></PaginationUI>
        </S.ListFoot>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
