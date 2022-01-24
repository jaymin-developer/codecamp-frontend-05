import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import CommentWriteUI from "./CommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentWrite.queries";

export default function CommentWrite() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [limitNumber, setLimitNumber] = useState(0);

  const [createBoardCommentInput] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.detail },
  });

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value && password.length >= 4 && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (writer && event.target.value.length >= 4 && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (contents !== "" && event.target.value.length <= 100) {
      setLimitNumber(event.target.value.length);
      setIsActive(true);
    } else if (event.target.value.length > 100) {
      event.target.value = event.target.value.slice(0, 100);
      alert("100자 이하로 작성해주세요.");
    }
  };

  async function onClickSubmit() {
    if (writer && password.length >= 4 && contents) {
      try {
        alert("댓글 등록되었습니다.");
        const result = await createBoardCommentInput({
          variables: {
            createBoardCommentInput: {
              rating: 1.0,
              writer: writer,
              password: password,
              contents: contents,
            },
            boardId: router.query.detail,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function onClickDelete(event) {
    const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail },
          },
        ],
      });
    } catch (error) {

    }
  }



  //   async function onClickUpdate() {
  //     try {
  //       const myVariables = {
  //         boardId: router.query.detail,
  //         password,
  //         updateBoardInput: {},
  //       };

  //       if (title) myVariables.updateBoardInput.title = title;
  //       if (contents) myVariables.updateBoardInput.contents = contents;

  //       await updateBoard({
  //         variables: myVariables,
  // {
  //   boardId: router.query.detail,
  //   password,
  //   updateBoardInput: {
  //     title,
  //     contents,
  //   },
  // },
  //       });
  //       alert("수정이 완료되었습니다.");
  //       router.push(`/boards/${router.query.detail}`);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }

  return (
    <CommentWriteUI
      data={data}
      isActive={isActive}
      limitNumber={limitNumber}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickDelete={onClickDelete}
    ></CommentWriteUI>
  );
}
