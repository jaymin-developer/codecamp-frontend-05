//BoardList.styles.js

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
`;
export const BestList = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestBoard = styled.div`
  width: 282px;
  height: 257px;
  background-color: blue;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
export const ListWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
`;
export const ListTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  padding-left: 19px;
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;
export const SearchDate = styled.button`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  color: #bdbdbd;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: #000000;
  border-radius: 10px;
  color: white;
`;
export const ListBody = styled.div`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 52px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Number = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
`;

export const Title = styled.div`
  height: 52px;
  width: 700px;
  text-align: center;
`;

export const Writer = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
`;

export const CreatedAt = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
`;

export const Row1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 52px;
  padding-left: 40px;
  padding-right: 40px;
  border-top: 1px solid gray;
`;
export const Number1 = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
`;
export const Title1 = styled.div`
  height: 52px;
  width: 700px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Writer1 = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
  overflow: hidden;
`;
export const CreatedAt1 = styled.div`
  height: 52px;
  width: 100px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListFoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;

export const PageNation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const PageNationDetail = styled.span`
  color: ${(props) =>
    props.clickPage === props.index + props.startPage ? "red" : ""};
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Box = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
