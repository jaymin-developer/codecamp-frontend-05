import * as S from "./CommentWrite.styles";
import { getMyDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function CommentWriteUI(props) {
  const router = useRouter();
  console.log(router.query.detail);

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.id), page: 1 },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <S.CommentBox>
      {props.isModalVisible && (
        <Modal
          visible={props.isModalVisible}
          onOk={props.onClickDelete}
          onCancel={props.onToggleModal}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <S.CommentInputBox>
        댓글
        <div>
          <S.WriterInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></S.WriterInput>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.PasswordInput>

          <S.Star onChange={props.onChangeStar} />
        </div>
        <S.InputBox>
          <S.CommentInput
            type="textarea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          ></S.CommentInput>
          <S.CommentFoot>
            <S.LimitLetter>
              {props.limitNumber}/100 <S.Error>{props.errorComment}</S.Error>
            </S.LimitLetter>
            <S.InputButton
              isActive={props.isActive}
              onClick={props.onClickSubmit}
            >
              등록하기
            </S.InputButton>
          </S.CommentFoot>
        </S.InputBox>
      </S.CommentInputBox>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <S.CommentList key={el._id}>
            <S.CommentProfile src="/images/board/detail/profile.png" />
            <S.CommentListColumn>
              <S.CommentWriter>
                {el?.writer}{" "}
                <S.CommentRating value={el?.rating} disabled></S.CommentRating>
              </S.CommentWriter>
              <S.CommentContents>{el?.contents}</S.CommentContents>
              <S.CommentDate>{getMyDate(el?.createdAt)}</S.CommentDate>
            </S.CommentListColumn>
            <S.CommentListIcon>
              <S.Rewrite src="/images/board/detail/rewrite.png"></S.Rewrite>
              <S.Delete
                id={el._id}
                src="/images/board/detail/delete.png"
                onClick={props.onClickOpenDeleteModal}
              ></S.Delete>
            </S.CommentListIcon>
          </S.CommentList>
        ))}
      </InfiniteScroll>
    </S.CommentBox>
  );
}
