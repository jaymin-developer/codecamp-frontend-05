import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [writerBorderColor, setWriterBorderColor] = useState("");
  const [passwordBorderColor, setPasswordBorderColor] = useState("");
  const [titleBorderColor, setTitleBorderColor] = useState("");
  const [contentsBorderColor, setContentsBorderColor] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
      setWriterBorderColor("");
    }

    if (
      event.target.value &&
      password.length >= 4 &&
      title &&
      contents.length >= 300
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value.length > 3) {
      setPasswordError("");
      setPasswordBorderColor("");
    }
    if (
      writer &&
      event.target.value.length >= 4 &&
      title &&
      contents.length >= 300
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
      setTitleBorderColor("");
    }
    if (
      writer &&
      password.length >= 4 &&
      event.target.value &&
      contents.length >= 300
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value.length > 299) {
      setContentsError("");
      setContentsBorderColor("");
    }
    if (writer && password.length >= 4 && title && event.target.value >= 300) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  async function onClikSubmit() {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
      setWriterBorderColor("1px solid red");
    }
    if (password.length < 4) {
      setPasswordError("비밀번호를 4자리 이상 입력해주세요.");
      setPasswordBorderColor("1px solid red");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
      setTitleBorderColor("1px solid red");
    }
    if (contents.length < 300) {
      setContentsError("300자 이상 입력해주세요.");
      setContentsBorderColor("1px solid red");
    }
    if (writer && password.length >= 4 && title && contents.length >= 300) {
      try {
        alert("게시글이 등록되었습니다.");
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function onClickUpdate() {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.detial,
          password,
          updateBoardInput: {
            title,
            contents,
          },
        },
      });
      alert("수정이 완료되었습니다.");
      router.push(`/borads/${router.query.Drtail}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      writerBorderColor={writerBorderColor}
      passwordBorderColor={passwordBorderColor}
      titleBorderColor={titleBorderColor}
      contentsBorderColor={contentsBorderColor}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClikSubmit={onClikSubmit}
      onClickUpdate={onClickUpdate}
    ></BoardWriteUI>
  );
}
