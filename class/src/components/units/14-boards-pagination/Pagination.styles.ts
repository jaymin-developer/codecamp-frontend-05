import styled from "@emotion/styled";

export const PageNation = styled.span`
  color: ${(props) =>
    props.clickPage === props.index + props.startPage ? "red" : ""};
  cursor: pointer;
`;
