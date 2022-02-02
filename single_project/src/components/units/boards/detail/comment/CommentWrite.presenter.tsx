import * as S from "./CommentWrite.styles";
import { getMyDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";
// import InfiniteScroll from "react-infinite-scroller";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentWriteItem from "./CommentWriteItem";
import InfiniteScroll from "react-infinite-scroller";

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

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.detail), page: 1 },
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
  //   const router = useRouter();
  //   console.log(router.query.detail);

  //   const [isEdits, setIsEdits] = useState([
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //   ]);

  //   const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
  //     variables: { boardId: String(router.query.detail), page: 1 },
  //   });

  //   const onLoadMore = () => {
  //     if (!data) return;

  //     fetchMore({
  //       variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         if (!fetchMoreResult.fetchBoardComments)
  //           return { fetchBoardComments: [...prev.fetchBoardComments] };
  //         return {
  //           fetchBoardComments: [
  //             ...prev.fetchBoardComments,
  //             ...fetchMoreResult.fetchBoardComments,
  //           ],
  //         };
  //       },
  //     });
  //   };
  //   // console.log(data.fetchBoardComments);
  //   const onClickIsEdit = (event) => {
  //     console.log(event.target.id);
  //     const aaa = isEdits;
  //     aaa[event.target.id] = true;
  //     console.log(aaa);
  //     setIsEdits([...aaa]);
  //     // setIsEdit(true);
  //   };

  // async function onClickCommentUpdate(event) {
  //   const myVariables = {
  //     boardCommentId: router.query.detail,
  //     password,
  //     updateBoardCommentInput: {},
  //   };

  //   if (contents) myVariables.updateBoardCommentInput.contents = contents;
  //   if (star) myVariables.updateBoardCommentInput.rating = star;

  //   try {
  //     await updateBoardComment({
  //       variables: myVariables,
  //     });
  //     alert("수정이 완료되었습니다.");
  //     router.push(`/boards/${router.query.detail}`);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

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

      <S.ScrollWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          // useWindow={false}
        >
          {data?.fetchBoardComments.map((el, index) => (
            <S.CommentList key={el._id}>
              <CommentWriteItem
                el={el}
                index={index}
                onClickOpenDeleteModal={props.onClickOpenDeleteModal}
              />
              {/* {isEdits[index] === false && (
                <>
                  <S.CommentProfile src="/images/board/detail/profile.png" />
                  <S.CommentListColumn>
                    <S.CommentWriter>
                      {el?.writer}{" "}
                      <S.CommentRating
                        value={el?.rating}
                        disabled
                      ></S.CommentRating>
                    </S.CommentWriter>
                    <S.CommentContents>{el?.contents}</S.CommentContents>
                    <S.CommentDate>{getMyDate(el?.createdAt)}</S.CommentDate>
                  </S.CommentListColumn>
                  <S.CommentListIcon>
                    <S.Rewrite
                      id={el._id}
                      src="/images/board/detail/rewrite.png"
                      onClick={onClickIsEdit}
                    ></S.Rewrite>
                    <S.Delete
                      id={el._id}
                      src="/images/board/detail/delete.png"
                      onClick={props.onClickOpenDeleteModal}
                    ></S.Delete>
                  </S.CommentListIcon>
                </>
              )}
              {isEdits[index] === true && (
                <div>
                  <div>=====================</div>
                  <div>이것은 수정하기 화면입니다.</div>
                  <div>=====================</div>
                </div>
              )} */}
            </S.CommentList>
          ))}
        </InfiniteScroll>
      </S.ScrollWrapper>
    </S.CommentBox>
  );
}
