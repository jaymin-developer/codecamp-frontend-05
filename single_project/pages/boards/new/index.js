import BoardWrite from "../../../src/components/units/boards/write/BoardWrite.container";

export default function BoardsNew() {
  return <BoardWrite isEdit={false}></BoardWrite>;
}
// import {
//   Address,
//   ButtonWrapper,
//   Contents,
//   ImageWrapper,
//   InputWrapper,
//   Label,
//   OptionWrapper,
//   Password,
//   RadioButton,
//   RadioLabel,
//   SearchButton,
//   Subject,
//   SubmitButton,
//   UploadButton,
//   Title,
//   Wrapper,
//   Writer,
//   WriterWrapper,
//   Youtube,
//   Zipcode,
//   ZipcodeWrapper,
//   Error,
// } from "../../../styles/emotion";
// import { useState } from "react";
// import { useMutation, gql } from "@apollo/client";
// import { useRouter } from "next/router";

// export const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//     }
//   }
// `;

// export default function BoardWrite() {
//   const router = useRouter();

//   const [writer, setWriter] = useState("");
//   const [password, setPassword] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");

//   const [writerError, setWriterError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [titleError, setTitleError] = useState("");
//   const [contentsError, setContentsError] = useState("");

//   const [writerBorderColor, setWriterBorderColor] = useState("");
//   const [passwordBorderColor, setPasswordBorderColor] = useState("");
//   const [titleBorderColor, setTitleBorderColor] = useState("");
//   const [contentsBorderColor, setContentsBorderColor] = useState("");

//   const [createBoard] = useMutation(CREATE_BOARD);

//   function onChangeWriter(event) {
//     setWriter(event.target.value);
//     if (event.target.value !== "") {
//       setWriterError("");
//       setWriterBorderColor("");
//     }
//   }

//   function onChangePassword(event) {
//     setPassword(event.target.value);
//     if (event.target.value.length > 3) {
//       setPasswordError("");
//       setPasswordBorderColor("");
//     }
//   }

//   function onChangeTitle(event) {
//     setTitle(event.target.value);
//     if (event.target.value !== "") {
//       setTitleError("");
//       setTitleBorderColor("");
//     }
//   }

//   function onChangeContents(event) {
//     setContents(event.target.value);
//     if (event.target.value.length > 299) {
//       setContentsError("");
//       setContentsBorderColor("");
//     }
//   }

//   async function onClikeSubmit() {
//     if (!writer) {
//       setWriterError("작성자를 입력해주세요.");
//       setWriterBorderColor("1px solid red");
//     }
//     if (password.length < 4) {
//       setPasswordError("비밀번호를 4자리 이상 입력해주세요.");
//       setPasswordBorderColor("1px solid red");
//     }
//     if (!title) {
//       setTitleError("제목을 입력해주세요.");
//       setTitleBorderColor("1px solid red");
//     }
//     if (contents.length < 300) {
//       setContentsError("300자 이상 입력해주세요.");
//       setContentsBorderColor("1px solid red");
//     }
//     if (writer && password.length >= 4 && title && contents.length >= 300) {
//       try {
//         alert("게시글이 등록되었습니다.");
//         const result = await createBoard({
//           variables: {
//             createBoardInput: {
//               writer: writer,
//               password: password,
//               title: title,
//               contents: contents,
//             },
//           },
//         });
//         router.push(`/boards/${result.data.createBoard._id}`);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   }

//   return (
//     <Wrapper>
//       <Title>게시판 등록</Title>
//       <WriterWrapper>
//         <InputWrapper>
//           <Label>작성자</Label>
//           <Writer
//             type="text"
//             placeholder="이름을 적어주세요."
//             onChange={onChangeWriter}
//             style={{
//               border: writerBorderColor,
//             }}
//           ></Writer>
//           <Error>{writerError}</Error>
//         </InputWrapper>
//         <InputWrapper>
//           <Label>비밀번호</Label>
//           <Password
//             type="password"
//             placeholder="비밀번호를 작성해주세요"
//             onChange={onChangePassword}
//             style={{
//               border: passwordBorderColor,
//             }}
//           ></Password>
//           <Error>{passwordError}</Error>
//         </InputWrapper>
//       </WriterWrapper>
//       <InputWrapper>
//         <Label>제목</Label>
//         <Subject
//           type="text"
//           placeholder="제목을 작성해주세요"
//           onChange={onChangeTitle}
//           style={{
//             border: titleBorderColor,
//           }}
//         ></Subject>
//         <Error>{titleError}</Error>
//       </InputWrapper>
//       <InputWrapper>
//         <Label>내용</Label>
//         <Contents
//           placeholder="내용을 300자 이상 작성해주세요"
//           onChange={onChangeContents}
//           style={{
//             border: contentsBorderColor,
//           }}
//         ></Contents>
//         <Error>{contentsError}</Error>
//       </InputWrapper>
//       <InputWrapper>
//         <Label>주소</Label>
//         <ZipcodeWrapper>
//           <Zipcode type="text" placeholder="07250" />
//           <SearchButton>우편번호 검색</SearchButton>
//         </ZipcodeWrapper>
//         <Address type="text"></Address>
//         <Address type="text"></Address>
//       </InputWrapper>
//       <InputWrapper>
//         <Label>유튜브</Label>
//         <Youtube placeholder="링크를 복사해주세요." />
//       </InputWrapper>
//       <ImageWrapper>
//         <Label>사진첨부</Label>
//         <UploadButton>
//           + <br />
//           Upload
//         </UploadButton>
//         <UploadButton>
//           + <br />
//           Upload
//         </UploadButton>
//         <UploadButton>
//           + <br />
//           Upload
//         </UploadButton>
//       </ImageWrapper>
//       <OptionWrapper>
//         <Label>메인설정</Label>
//         <RadioButton type="radio" id="youtube" name="radio-button" />
//         <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
//         <RadioButton type="radio" id="image" name="radio-button" />
//         <RadioLabel htmlFor="image">사진</RadioLabel>
//       </OptionWrapper>
//       <ButtonWrapper>
//         <SubmitButton onClick={onClikeSubmit}>등록하기</SubmitButton>
//       </ButtonWrapper>
//     </Wrapper>
//   );
// }
