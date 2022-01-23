import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardCommentInput(
    $createBoardCommentInput: createBoardCommentInput
    $boardId: ID!
  ) {
    createBoardCommentInput(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      user
      createdAt
      updateAt
    }
  }
`;
