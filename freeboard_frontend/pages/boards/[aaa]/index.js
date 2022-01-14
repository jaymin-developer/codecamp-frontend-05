import {
  Body,
  WrapperHead,
  LoginBar,
  Carousel,
  WrapperBody,
  Nav,
  Registration,
  RegistrationHead,
  BoardTitle,
  BoardContent,
  BoardWiter,
  BoardDate,
  UserCircle,
  RegistrationBody,
  Like,
  WrapperFoot,
  ButtonList,
  ListButton,
  CommentBox,
  CommentInputBox,
  WriterInput,
  PasswordInput,
  CommentInput,
  InputButton,
  InputBox,
  CommentInput2,
  LimitLetter,
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
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import userImg from "../../../public/userCircle.png";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;
import React from "react";

export default function boardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) },
  });
  return (
    <Body>
      <WrapperHead>
        <LoginBar></LoginBar>
        <Carousel></Carousel>
        <Nav></Nav>
      </WrapperHead>
      <WrapperBody>
        <Registration>
          <RegistrationHead>
            <UserCircle></UserCircle>
            <BoardWiter>{data?.fetchBoard?.writer}</BoardWiter>
            <BoardDate>
              Date : {data?.fetchBoard?.createdAt.slice(0, 10)}
            </BoardDate>
          </RegistrationHead>
          <RegistrationBody>
            <BoardTitle>{data?.fetchBoard?.title}</BoardTitle>
            <BoardContent>{data?.fetchBoard?.contents}</BoardContent>
            <Like>좋아요 : {data?.fetchBoard?.like}</Like>
          </RegistrationBody>
        </Registration>
      </WrapperBody>
      <WrapperFoot>
        <ButtonList>
          <ListButton>목록으로</ListButton>
          <ListButton>수정하기</ListButton>
          <ListButton>삭제하기</ListButton>
        </ButtonList>
        <CommentBox>
          <CommentInputBox>
            댓글
            <div>
              <WriterInput placeholder="작성자"></WriterInput>
              <PasswordInput placeholder="비밀번호"></PasswordInput> 별점
            </div>
            <InputBox>
              <CommentInput
                type="textarea"
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              ></CommentInput>
              <CommentInput2>
                <LimitLetter>0/100</LimitLetter>
                <InputButton>등록하기</InputButton>
              </CommentInput2>
            </InputBox>
          </CommentInputBox>
        </CommentBox>
      </WrapperFoot>
    </Body>
  );
}

// 조건부 렌더링 data && data.fetchBoard.writer data가 잇으면
// data? = data && data 옵셔널 체이닝
// 인자 앞에 ?.는 있냐 없냐 체크하고 보여준다. 삭제해도 데이터는 남아져있으니
