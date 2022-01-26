import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentBox = styled.div`
  width: 1200px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
`;

export const WriterInput = styled.input`
  padding-left: 20px;
  margin-top: 40px;
  margin-right: 24px;
  width: 180px;
  height: 52px;
`;
export const PasswordInput = styled.input`
  padding-left: 20px;
  width: 180px;
  height: 52px;
  margin-right: 20px;
`;
export const InputBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 161px;
  border: 1px solid #bdbdbd;
`;
export const CommentInput = styled.input`
  padding: 0px 20px 0px 20px;
  width: 100%;
  height: 108px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
`;
export const InputButton = styled.button`
  width: 91px;
  height: 52px;
  color: ${(props) => (props.isActive ? "black" : "white")};
  background-color: ${(props) => (props.isActive ? "#ffd600" : "black")};

  :hover {
    cursor: ${(props) => (props.isActive ? "pointer" : "default")};
    color: white;
  }
`;

export const LimitLetter = styled.div`
  padding-left: 20px;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CommentFoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.div`
  padding-left: 10px;
  color: red;
`;

export const CommentList = styled.div`
  width: 1200px;
  height: 120px;
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CommentListColumn = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
`;
export const CommentWriter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const CommentRating = styled(Rate)`
padding-left: 20px;
font-size: 12px;
`;
export const CommentContents = styled.div`
  padding-top: 4px;
  font-size: 16px;
  color: #4f4f4f;
`;
export const CommentDate = styled.div`
  padding-top: 20px;
  font-size: 12px;
  color: #bdbdbd;
`;

export const CommentListIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 52px;
  height: 18px;
`;

export const Rewrite = styled.img`
  width: 18px;
  height: 18px;
`;

export const Delete = styled.img`
  width: 18px;
  height: 18px;
`;

export const Star = styled(Rate)`
`;
