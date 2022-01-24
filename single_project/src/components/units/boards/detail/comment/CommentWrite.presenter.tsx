import * as S from "./CommentWrite.styles";
import { getMyDate } from "../../../../../commons/libraries/utils";

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
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentList key={el._id}>
          <S.CommentProfile src="/images/board/detail/profile.png" />
          <S.CommentListColumn>
            <S.CommentWriter>
              {el?.writer} <S.CommentRating>평점 : {el?.rating}</S.CommentRating>
            </S.CommentWriter>
            <S.CommentContents>{el?.contents}</S.CommentContents>
            <S.CommentDate>{getMyDate(el?.createdAt)}</S.CommentDate>
          </S.CommentListColumn>
          <S.CommentListIcon>
            <S.Rewrite src="/images/board/detail/rewrite.png"></S.Rewrite>
            <S.Delete
              id={el._id}
              src="/images/board/detail/delete.png"
              onClick={props.onClickDelete}
            ></S.Delete>
          </S.CommentListIcon>
        </S.CommentList>
      ))}
    </S.CommentBox>
  );
}

// {props.data?.fetchBoardComments.map((el) => (
//     <C.Comment key = {el._id}>
//       <C.CommentInfo>
//         <C.Writer>{el.writer}</C.Writer>
//         <C.wrapper>
//           <C.buttonUpdate onClick={props.updateComment}>수정</C.buttonUpdate>
//           <C.buttonDelete onClick={props.deleteComment} id={el._id}>삭제</C.buttonDelete>
//           <div>
//             <input onChange={props.changePs} placeholder="password" />
//           </div>
//         </C.wrapper>

//       </C.CommentInfo>
//       <C.content>{el.contents}</C.content>

//       <C.date>{(el.createdAt).slice(0,10)}</C.date>
//     </C.Comment>

//   ))}
