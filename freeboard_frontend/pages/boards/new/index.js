import {
  Body,
  WrapperHead,
  LoginBar,
  Carousel,
  WrapperBody,
  Nav,
  Registration,
  H1,
  RegistrationTop,
  Name,
  Password,
  Title,
  Content,
  Address,
  AddSearch,
  Youtube,
  PhotoUpload,
  UploadList,
  Photo,
  MainSetting,
  RadioBox,
  FinalButton,
  Button,
  ResInput52,
  ResInput480,
  AddButton,
  Message,
  RadioButton,
  RadioLabel,
} from "../../../styles/emotion";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_Board = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function Newpage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_Board);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [errorName, setErrorName] = useState("  ");
  const [errorPassword, setErrorPassword] = useState(" ");
  const [errorTitle, setErrorTitle] = useState(" ");
  const [errorContent, setErrorContent] = useState(" ");
  const [errorAddress, setErrorAddress] = useState(" ");
  const [submitMessage, setSubmitMessage] =
    useState("게시글이 등록되었습니다.");

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: name,
          title: title,
          contents: content,
        },
      });
      router.push(`../boards/${result.data.createBoard.number}`);
      // setSubmitMessage(result.data.createBoard.message);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };
  // 자바스크립트 객체에서 키와 값이 같으면 하나로 쓰면 된다. shorthand property writer : writer => writer

  const onChangeWriter = (event) => {
    setName(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContent(event.target.value);
  };

  function checkName(event) {
    setName(event.target.value);
    if (event.target.value) {
      setErrorName(" ");
    }
  }

  function checkPassword(event) {
    setPassword(event.target.value);
    if (event.target.value) {
      setErrorPassword(" ");
    }
  }

  function checkTitle(event) {
    setTitle(event.target.value);
    if (event.target.value) {
      setErrorTitle(" ");
    }
  }

  function checkContent(event) {
    setContent(event.target.value);
    if (event.target.value) {
      setErrorContent(" ");
    }
  }

  function checkAddress(event) {
    setAddress(event.target.value);
    if (event.target.value) {
      setErrorAddress(" ");
    }
  }

  function clickFinal() {
    if (name === "") {
      setErrorName("이름을 입력해주세요.");
    } else {
      setErrorName(" ");
    }

    if (password === "") {
      setErrorPassword("비밀번호를 입력해주세요.");
    } else {
      setErrorPassword(" ");
    }

    if (title === "") {
      setErrorTitle("제목을 입력해주세요.");
    } else {
      setErrorTitle(" ");
    }

    if (content === "") {
      setErrorContent("내용을 입력해주세요.");
    } else {
      setErrorContent(" ");
    }

    if (address === "") {
      setErrorAddress("주소를 입력해주세요.");
    } else {
      setErrorAddress(" ");
    }

    console.log(name, password, title, content, address);
    if (name && password && title && content && address) {
      onClickSubmit();
      alert(submitMessage);
    } else {
      alert("오류가 있습니다");
    }
  }

  return (
    <Body>
      <WrapperHead>
        <LoginBar></LoginBar>
        <Carousel></Carousel>
        <Nav></Nav>
      </WrapperHead>

      <WrapperBody>
        <Registration>
          <H1>게시글 등록</H1>
          <RegistrationTop>
            <Name>
              작성자 *
              <ResInput52
                type={"text"}
                placeholder="이름을 적어주세요."
                onChange={(checkName, onChangeWriter)}
              ></ResInput52>
              <Message>{errorName}</Message>
            </Name>
            <Password>
              비밀번호 *
              <ResInput52
                type={"password"}
                placeholder="비밀번호를 입력해주세요."
                onChange={checkPassword}
              ></ResInput52>
              <Message>{errorPassword}</Message>
            </Password>
          </RegistrationTop>
          <Title>
            제목 *
            <ResInput52
              type={"text"}
              placeholder="제목을 입력해주세요."
              onChange={(checkTitle, onChangeTitle)}
            ></ResInput52>
            <Message>{errorTitle}</Message>
          </Title>
          <Content>
            내용 *<Message>{errorContent}</Message>
            <ResInput480
              type={"textarea"}
              placeholder="내용을 작성해주세요."
              onChange={(checkContent, onChangeContents)}
            ></ResInput480>
          </Content>
          <Address>
            주소 *<Message>{errorAddress}</Message>
            <AddSearch>
              <ResInput52 type={"text"} placeholder="07250"></ResInput52>{" "}
              <AddButton>우편번호 검색</AddButton>
            </AddSearch>
            <ResInput52 type={"text"}></ResInput52>
            <ResInput52
              type={"text"}
              placeholder="상세주소를 입력해주세요."
              onChange={checkAddress}
            ></ResInput52>
          </Address>
          <Youtube>
            유튜브
            <ResInput52
              type={"text"}
              placeholder="링크를 복사해주세요."
            ></ResInput52>
          </Youtube>
          <PhotoUpload>
            사진첨부
            <UploadList>
              <Photo>
                <span>+</span> <span>Upload</span>
              </Photo>
              <Photo>
                <span>+</span> <span>Upload</span>
              </Photo>
              <Photo>
                <span>+</span> <span>Upload</span>
              </Photo>
            </UploadList>
          </PhotoUpload>
          <MainSetting>
            메인 설정 *
            <RadioBox>
              <RadioButton type="radio" id="youtube" name="main"></RadioButton>
              <RadioLabel htmlfor="youtube">유튜브</RadioLabel>
              <RadioButton type="radio" id="image" name="main"></RadioButton>
              <RadioLabel htmlfor="image">사진</RadioLabel>
            </RadioBox>
          </MainSetting>
          <FinalButton>
            <Button onClick={clickFinal}>등록하기</Button>
          </FinalButton>
        </Registration>
      </WrapperBody>
    </Body>
  );
}
