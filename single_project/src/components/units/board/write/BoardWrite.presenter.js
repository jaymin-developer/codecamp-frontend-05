import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Title>게시판 등록</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            style={{
              border: props.writerBorderColor,
            }}
          ></S.Writer>
          <S.Error>{props.writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 작성해주세요"
            onChange={props.onChangePassword}
            style={{
              border: props.passwordBorderColor,
            }}
          ></S.Password>
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeTitle}
          style={{
            border: props.titleBorderColor,
          }}
        ></S.Subject>
        <S.Error>{props.titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 300자 이상 작성해주세요"
          onChange={props.onChangeContents}
          style={{
            border: props.contentsBorderColor,
          }}
        ></S.Contents>
        <S.Error>{props.contentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode type="text" placeholder="07250" />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
        <S.Address type="text"></S.Address>
        <S.Address type="text"></S.Address>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>
          + <br />
          Upload
        </S.UploadButton>
        <S.UploadButton>
          + <br />
          Upload
        </S.UploadButton>
        <S.UploadButton>
          + <br />
          Upload
        </S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClikeSubmit}>등록하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}