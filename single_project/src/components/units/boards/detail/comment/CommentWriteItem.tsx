import * as S from "./CommentWrite.styles";
// import InfiniteScroll from "react-infinite-scroller";
import { getMyDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";

export default function CommentWriteItem(props) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);
  const [commentId, setCommentId] = useState("");
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  console.log(password, contents, star, commentId);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.detail), page: 1 },
  });
  const [isEdit, setIsEdit] = useState(false);

  const onClickIsEdit = (event) => {
    setIsEdit(true);
    setCommentId(event.target.id);
  };

  function onClickUpdateCancel() {
    setIsEdit(false);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeStar = (value) => {
    setStar(value);
  };

  async function onClickCommentUpdate(event) {
    try {
      await updateBoardComment({
        variables: {
          password,
          boardCommentId: commentId,
          updateBoardCommentInput: {
            rating: Number(star),
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { board: router.query.id, page: 1 },
          },
        ],
      });
      alert("수정이 완료되었습니다.");
      setIsEdit(false);
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(props.el);

  return (
    <>
      {isEdit === false && (
        <>
          <S.CommentProfile src="/images/board/detail/profile.png" />
          <S.CommentListColumn>
            <S.CommentWriter>
              {props.el?.writer}{" "}
              <S.CommentRating
                value={props.el?.rating}
                disabled
              ></S.CommentRating>
            </S.CommentWriter>
            <S.CommentContents>{props.el?.contents}</S.CommentContents>
            <S.CommentDate>{getMyDate(props.el?.createdAt)}</S.CommentDate>
          </S.CommentListColumn>
          <S.CommentListIcon>
            <S.Rewrite
              id={props.el._id}
              src="/images/board/detail/rewrite.png"
              onClick={onClickIsEdit}
            ></S.Rewrite>
            <S.Delete
              id={props.el._id}
              src="/images/board/detail/delete.png"
              onClick={props.onClickOpenDeleteModal}
            ></S.Delete>
          </S.CommentListIcon>
        </>
      )}
      {isEdit === true && (
        <S.CommentUpdateInputBox>
          <S.CommentUpdateInputTopBox>
            <S.Box>
              <S.UpdateWriterInput
                type="text"
                readOnly
                value={props.el.writer}
              />
              <S.UpdatePasswordInput
                type="password"
                placeholder="비밀번호"
                onChange={onChangePassword}
              />

              <S.Star
                defaultValue={Number(props.el.rating)}
                onChange={onChangeStar}
              />
            </S.Box>
            <S.Box2>
              <button onClick={onClickCommentUpdate}>수정하기</button>
              <button onClick={onClickUpdateCancel}>취소하기</button>
            </S.Box2>
          </S.CommentUpdateInputTopBox>
          <S.CommentUpdateInputBodyBox>
            <S.UpdateCommentInput
              type="text"
              placeholder="수정할 내용을 작성해주세요"
              defaultValue={props.el.contents}
              onChange={onChangeContents}
            />
          </S.CommentUpdateInputBodyBox>
        </S.CommentUpdateInputBox>
      )}
    </>
  );
}
{
  /* <S.CommentUpdateInputBox> */
}

{
  /* <S.CommentInputBox>
            <div>
              <S.WriterInput
                type="text"
                readOnly
                value={props.el.writer}
              ></S.WriterInput>
              <S.PasswordInput
                type="password"
                placeholder="비밀번호"
                onChange={onChangePassword}
              ></S.PasswordInput>

              <S.Star defaultValue={props.el.rating} onChange={onChangeStar} />
            </div>
            <S.InputBox>
              <S.CommentInput
                type="textarea"
                defaultValue={props.el.contents}
                onChange={onChangeContents}
              ></S.CommentInput>
              <S.CommentFoot>
                <S.LimitLetter>
                  {props.limitNumber}/100{" "}
                  <S.Error>{props.errorComment}</S.Error>
                </S.LimitLetter>
                <S.InputButton
                  isActive={props.isActive}
                  onClick={onClickCommentUpdate}
                >
                  수정하기
                </S.InputButton>
              </S.CommentFoot>
            </S.InputBox>
          </S.CommentInputBox> */
}
//   </S.CommentUpdateInputBox>
