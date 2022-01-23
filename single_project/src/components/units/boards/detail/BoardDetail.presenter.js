import * as S from "./BoardDetail.styles";
import { getMyDate } from "../../../../commons/libraries/utils";
import BoardDetail from "./comment/CommentWrite.container";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.Profile src="/images/avatar.png" />
            <S.Information>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              {/* {data && data.fetchBoard && data.fetchBoard.writer}
            = data?.fetchBoard?.writer */}
              <S.CreatedAt>
                Date : {getMyDate(props.data?.fetchBoard.createdAt)}
              </S.CreatedAt>
            </S.Information>
          </S.ProfileWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          <S.LikeWrapper>
            {/* <Like>좋아요</Like>
          <Dislike></Dislike> */}
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
      <BoardDetail></BoardDetail>
      {/* <S.CommentBox>
        <S.CommentInputBox>
          댓글
          <div>
            <S.WriterInput placeholder="작성자"></S.WriterInput>
            <S.PasswordInput placeholder="비밀번호"></S.PasswordInput> 별점
          </div>
          <S.InputBox>
            <S.CommentInput
              type="textarea"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeComment}
            ></S.CommentInput>
            <S.CommentFoot>
              <S.LimitLetter>
                {props.limitNumber}/100 <S.Error>{props.errorComment}</S.Error>
              </S.LimitLetter>
              <S.InputButton>등록하기</S.InputButton>
            </S.CommentFoot>
          </S.InputBox>
        </S.CommentInputBox>
        <CommentList>
        {data?.fetchBoards.map((el, index) => (
                <Row key={index}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                </Row>))}
        </CommentList>
      </S.CommentBox> */}
    </S.Wrapper>
  );
}
