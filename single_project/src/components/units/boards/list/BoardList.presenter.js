import { gql, useMutation, useQuery } from "@apollo/client";
import * as S from "./BoardList.styles";

const FETCH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      _id
      title
      writer
      createdAt
    }
  }
`;

export default function BoardsListUI() {
  const { data } = useQuery(FETCH_BOARD);

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
              <S.Number1>{data?.fetchBoards.length - index}</S.Number1>
              <S.Title1>{el.writer}</S.Title1>
              <S.Writer1>{el.title}</S.Writer1>
              <S.CreatedAt1>{el.createdAt.slice(0, 10)}</S.CreatedAt1>
            </S.Row1>
          ))}
        </S.ListBody>
        <S.ListFoot>
          <S.PageNation></S.PageNation>
          <S.SubmitButton></S.SubmitButton>
        </S.ListFoot>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
