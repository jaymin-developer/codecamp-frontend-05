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

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    ></BoardDetailUI>
  );
}
