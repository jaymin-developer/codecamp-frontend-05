import * as S from "./BoardDetail.styles";
import { getMyDate } from "../../../../commons/libraries/utils";
import BoardDetail from "./comment/CommentWrite.container";
import ReactPlayer from 'react-player'

export default function BoardDetailUI(props) {
const youtubeUrl = `"${props.data?.fetchBoard.youtubeUrl}"`
console.log(props.data)
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.Profile src="/images/avatar.png" />
            <S.Information>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              {/* {data && data.fetchBoard && data.fetchBoard.writer}
            = data?.fetchBoard?.writer */}
              <S.CreatedAt>
                Date : {getMyDate(props.data?.fetchBoard.createdAt)}
              </S.CreatedAt>
            </S.Information>
          </S.ProfileWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          <S.Youtube>
          <ReactPlayer url={youtubeUrl} playing={true} width={800} height={600}  muted={true} controls={true}/>
          </S.Youtube>
          <S.LikeWrapper>
            <S.Like><S.LikeIcon src="/images/board/detail/like.png" onClick={props.onClickLike}/>{props.data?.fetchBoard.likeCount}</S.Like>
            <S.Dislike><S.DislikeIcon src="/images/board/detail/dislike.png" onClick={props.onClickDislike}/>{props.data?.fetchBoard.dislikeCount}</S.Dislike>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
      <BoardDetail></BoardDetail>
    </S.Wrapper>
  );
}
