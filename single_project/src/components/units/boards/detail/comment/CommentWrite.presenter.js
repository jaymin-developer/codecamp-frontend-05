import * as S from "./CommentWrite.styles";
// import { getMyDate } from "../../../../commons/libraries/utils";

export default function CommentWriteUI(props) {
  return (
    <S.CommentBox>
      <S.CommentInputBox>
        댓글
        <div>
          <S.WriterInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></S.WriterInput>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.PasswordInput>{" "}
          별점
        </div>
        <S.InputBox>
          <S.CommentInput
            type="textarea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          ></S.CommentInput>
          <S.CommentFoot>
            <S.LimitLetter>
              {props.limitNumber}/100 <S.Error>{props.errorComment}</S.Error>
            </S.LimitLetter>
            <S.InputButton
              isActive={props.isActive}
              onClick={props.onClickSubmit}
            >
              등록하기
            </S.InputButton>
          </S.CommentFoot>
        </S.InputBox>
      </S.CommentInputBox>
      {props.data?.fetchBoardComments.map((el, index) => (
        <S.CommentList key={index}>
          <S.CommentProfile src="/images/board/detail/profile.png" />
          <S.CommentListColumn>
            <S.CommentWriter>
              {el.writer} <S.CommentRating>평점 : {el.rating}</S.CommentRating>
            </S.CommentWriter>
            <S.CommentContents>{el.contents}</S.CommentContents>
            <S.CommentDate>{el.createdAt}</S.CommentDate>
          </S.CommentListColumn>
          <S.CommentListIcon>
            <S.Rewrite src="/images/board/detail/rewrite.png"></S.Rewrite>
            <S.Delete
              onClick={props.onClickDelete}
              src="/images/board/detail/delete.png"
            ></S.Delete>
          </S.CommentListIcon>
        </S.CommentList>
      ))}
    </S.CommentBox>
  );
}
