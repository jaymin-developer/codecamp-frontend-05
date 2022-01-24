import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.img`
  margin-right: 10px;
  width: 60px;
  height: 60px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 24px;
  line-height: 36px;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  table-layout: fixed;
  word-wrap: break-word;
  max-width: 996px;
  padding: 40px 20px 120px 20px;
`;

export const LikeWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const LinkIcon = styled.img``;

// export const CommentBox = styled.div`
//   width: 1200px;
//   margin-top: 40px;
//   padding-top: 40px;
//   border-top: 1px solid #bdbdbd;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const CommentInputBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   font-size: 18px;
// `;

// export const WriterInput = styled.input`
//   padding-left: 20px;
//   margin-top: 40px;
//   margin-right: 24px;
//   width: 180px;
//   height: 52px;
// `;
// export const PasswordInput = styled.input`
//   padding-left: 20px;
//   width: 180px;
//   height: 52px;
// `;
// export const InputBox = styled.div`
//   margin-top: 20px;
//   width: 100%;
//   height: 161px;
//   border: 1px solid #bdbdbd;
// `;
// export const CommentInput = styled.input`
//   padding: 0px 20px 0px 20px;
//   width: 100%;
//   height: 108px;
//   border: none;
//   border-bottom: 1px solid #f2f2f2;
// `;
// export const InputButton = styled.button`
//   width: 91px;
//   height: 52px;
//   background-color: black;
//   color: white;
// `;

// export const LimitLetter = styled.div`
//   padding-left: 20px;
//   font-size: 16px;
//   line-height: 24px;
//   color: #bdbdbd;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
// `;

// export const CommentFoot = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const Error = styled.div`
//   padding-left: 10px;
//   color: red;
// `;
