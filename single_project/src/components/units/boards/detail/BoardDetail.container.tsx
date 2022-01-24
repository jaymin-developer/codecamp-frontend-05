// import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD
  // CREATE_BOARD_COMMENT,
} from "./BoardDetail.queries";
import { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeCount, setLikeCount] = useState(0)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.detail) },
  });

  console.log(data)
  const onClickMoveToList = () => {
    router.push("/boards");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.detail}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.detail) },
      });
      alert("삭제가 완료되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query.detail) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.detail },
          },
        ]
      });
      
      alert("좋아요를 누르셨습니다.");
      setLikeCount(data?.fetchBoard.likeCount + 1)
      
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDislike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: String(router.query.detail) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.detail },
          },
        ]
      });
      
      alert("싫어요를 누르셨습니다.");
      setLikeCount(data?.fetchBoard.dislikeCount + 1)
      
    } catch (error) {
      alert(error.message);
    }
  };


  // const onChangeContents = (event) => {
  //   setContents(event.target.value);
  //   if (contents !== "" && event.target.value.length <= 100) {
  //     setLimitNumber(event.target.value.length);
  //     setErrorContents("");
  //   } else if (event.target.value.length > 100) {
  //     alert("100자 이하로 작성해주세요.");
  //     setLimitNumber(event.target.value.length);
  //     setErrorContents("100자 이하로 작성해주세요.");
  //   } else if (event.target.value.length < 10) {
  //     alert("10자 이상으로 작성해주세요.");
  //     setLimitNumber(event.target.value.length);
  //     setErrorContents("10자 이상으로 작성해주세요.");
  //   }
  // };

  // function onChangeContents(event) {
  //   setContents(event.target.value);
  //   if (event.target.value.length >= 10) {
  //     setContentsError("");
  //     setContentsBorderColor("");
  //   }
  //   if (writer && password.length >= 4 && event.target.value >= 10) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }

  // function onChangeWriter(event) {
  //   setWriter(event.target.value);
  //   if (event.target.value !== "") {
  //     setWriterError("");
  //     setWriterBorderColor("");
  //   }
  //   if (event.target.value && password.length >= 4 && contents.length >= 10) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }

  // function onChangePassword(event) {
  //   setPassword(event.target.value);
  //   if (event.target.value.length > 3) {
  //     setPasswordError("");
  //     setPasswordBorderColor("");
  //   }
  //   if (writer && event.target.value.length >= 4 && contents.length >= 10) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }

  // async function onClickSubmit() {
  //   if (!writer) {
  //     setWriterError("작성자를 입력해주세요.");
  //     setWriterBorderColor("1px solid red");
  //   }
  //   if (password.length < 4) {
  //     setPasswordError("비밀번호를 4자리 이상 입력해주세요.");
  //     setPasswordBorderColor("1px solid red");
  //   }
  //   if (contents.length < 100) {
  //     setContentsError("100 이상 입력해주세요.");
  //     setContentsBorderColor("1px solid red");
  //   }
  //   if (writer && password.length >= 4 && contents.length >= 100) {
  //     try {
  //       alert("게시글이 등록되었습니다.");
  //       const result = await createBoardCommentInput({
  //         variables: {
  //           createBoardInput: {
  //             writer: writer,
  //             password: password,
  //             contents: contents,
  //           },
  //         },
  //       });
  //       router.push(`/boards/${result.data.createBoard._id}`);
  //       // 주소 변경 필요
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // }

  return (
    <BoardDetailUI
      data={data}
      // isActive={isActive}
      // limitNumber={limitNumber}
      // errorContents={errorContents}
      // writerError={writerError}
      // passwordError={passwordError}
      // contentsError={contentsError}
      // writerBorderColor={writerBorderColor}
      // passwordBorderColor={passwordBorderColor}
      // contentsBorderColor={contentsBorderColor}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      // onChangeWriter={onChangeWriter}
      // onChangePassword={onChangePassword}
      // onChangeContents={onChangeContents}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      // onClickSubmit={onClickSubmit}
    ></BoardDetailUI>
  );
}
