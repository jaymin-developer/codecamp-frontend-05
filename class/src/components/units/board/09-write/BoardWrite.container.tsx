import axios from "axios";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [aaa, setAaa] = useState("");
  const [qqq] = useMutation(CREATE_BOARD);
  const [www] = useMutation(UPDATE_BOARD);

  const zzz = async () => {
    const result = await qqq({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result.data);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);

    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const xxx = async () => {
    console.log("수정하기를 클릭하셨군요!!!");
    // interface MyVariables {
    //   number : number
    //   writer?: string
    //   title?: string
    //   contents?: string
    // }
    // : MyVariables
    const myVariables  = {
      number: Number(router.query.mynumber),
    };

    if (myWriter) myVariables.writer = myWriter;
    // if에서 한 줄일 때는 {} 생략 가능, 2줄일 때는 {} 필수!

    if (myTitle) {
      myVariables.title = myTitle;
    }

    if (myContents) {
      myVariables.contents = myContents;
    }

    const result = await www({
      variables: myVariables,
    });
    console.log(result.data.updateBoard.message);
    router.push(`/09-01-boards/${router.query.mynumber}`);
  };

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value && myTitle && myContents) {
      setIsActive(true);
    }
  };

  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value);
    if (myWriter && event.target.value && myContents) {
      setIsActive(true);
    }
  };

  const onChangeMyContents = (event) => {
    setMyContents(event.target.value);
    if (myWriter && myTitle && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <BoardWriteUI
      bbb={aaa}
      ccc={zzz}
      xxx={xxx}
      ddd={onChangeMyWriter}
      eee={onChangeMyTitle}
      fff={onChangeMyContents}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
