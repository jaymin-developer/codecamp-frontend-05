import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import {
  Profile,
  ProfileWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  IconWrapper,
  Information,
  LinkIcon,
  Title,
  Wrapper,
  Writer,
  CommentBox,
  CommentInputBox,
  WriterInput,
  PasswordInput,
  CommentInput,
  InputButton,
  InputBox,
  CommentFoot,
  LimitLetter,
  LikeWrapper,
  Error,
} from "../../../styles/emotion2";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetail() {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [limitNumber, setLimitNumber] = useState(0);

  const [errorComment, setErrorComment] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.List) },
  });
  // data 도 스테이트와 같음.
  // global state

  // const onChangeCommnet = (event) =>{
  //   setComment(event.target.value)
  //   }
  // }

  // const onClikeCommentSubmit

  const onChangeComment = (event) => {
    setComment(event.target.value);
    if (comment !== "" && event.target.value.length <= 100) {
      setLimitNumber(event.target.value.length);
      setErrorComment("");
    } else if (event.target.value.length > 100) {
      alert("100자 이하로 작성해주세요.");
      setLimitNumber(event.target.value.length);
      setErrorComment("100자 이하로 작성해주세요.");
    }
  };

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <ProfileWrapper>
            <Profile src="/images/avatar.png" />
            <Information>
              <Writer>{data?.fetchBoard.writer}</Writer>
              {/* {data && data.fetchBoard && data.fetchBoard.writer}
              = data?.fetchBoard?.writer */}
              <CreatedAt>
                Date : {data?.fetchBoard.createdAt.slice(0, 10)}
              </CreatedAt>
            </Information>
          </ProfileWrapper>
          <IconWrapper>
            <LinkIcon src="/images/board/detail/link.png" />
          </IconWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard.title}</Title>
          <Contents>{data?.fetchBoard.contents}</Contents>
          <LikeWrapper>
            {/* <Like>좋아요</Like>
            <Dislike></Dislike> */}
          </LikeWrapper>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
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
              onChange={onChangeComment}
            ></CommentInput>
            <CommentFoot>
              <LimitLetter>
                {limitNumber}/100 <Error>{errorComment}</Error>
              </LimitLetter>
              <InputButton>등록하기</InputButton>
            </CommentFoot>
          </InputBox>
        </CommentInputBox>
      </CommentBox>
    </Wrapper>
  );
}
