import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardsListUI from "./BoardList.presenter";
import { CREATE_BOARD } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  
  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  return <BoardsListUI onClickMoveToBoardNew={onClickMoveToBoardNew}></BoardsListUI>;
}
