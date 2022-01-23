import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardCommentInput(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
    }
  }
`;

// export const FETCH_BOARD_COMMENTS = gql`
//   query fetchBoardComments($boardId: ID!) {
//     fetchBoardComments(boardId: $boardId)
//   }
//   {
//     _id
//     writer
//     contents
//     rating
//     user
//     createdAt
//     updatedAt
//   }
// `;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      rating
      contents
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardCommentInput($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

// export const Update_Board_Comment = gql`
//   mutation updateBoardCommentInput(
//     $updateBoardCommentInput: UpdateBoardCommentInput!
//     $password: String
//     $boardCommentId: ID!
//   ) {
//     updateBoardCommentInput(
//       updateBoardCommentInput: $updateBoardCommentInput
//       password: $password
//       boardCommentId: $boardCommentId
//     ) {
//       _id
//       writer
//       contents
//       rating
//       user
//       createdAt
//       updatedAt
//     }
//   }
// `;
