import {Body, WrapperHead, LoginBar, Carousel, WrapperBody, Nav, Registration, H1, RegistrationTop, Name, Password, Title, Content, Address, AddSearch, Youtube, PhotoUpload, UploadList, Photo, MainSetting,RadioBox,FinalButton, Button, ResInput52, ResInput480, AddButton, Input1} from '../../../styles/emotion'
// LoginBar, Carousel, Nav, WrapperBody
export default function Newpage() {

    return (
        <Body>
            <WrapperHead>
                <LoginBar>

                </LoginBar>
                <Carousel>

                </Carousel>
                <Nav>

                </Nav>
            </WrapperHead>

            <WrapperBody>
                <Registration>
                    <H1>게시글 등록</H1>
                    <RegistrationTop>
                        <Name>
                            작성자
                            <ResInput52 type={'text'} placeholder='이름을 적어주세요.'></ResInput52>
                        </Name>
                        <Password>
                            비밀번호
                            <ResInput52 type={'password'} placeholder='비밀번호를 입력해주세요.'></ResInput52>
                        </Password>
                    </RegistrationTop>
                    <Title>
                        제목
                        <ResInput52 type={'text'} placeholder='제목을 입력해주세요.'></ResInput52>
                    </Title>
                    <Content>
                        내용
                        <ResInput480 type={'textarea'} placeholder='내용을 작성해주세요.'></ResInput480>
                    </Content>
                    <Address>
                        주소
                        <AddSearch>
                            <ResInput52 type={'text'} placeholder='07250'></ResInput52> <AddButton>우편번호 검색</AddButton>
                        </AddSearch>                        
                        <ResInput52 type={'text'} ></ResInput52>
                        <ResInput52 type={'text'} ></ResInput52>
                    </Address>
                    <Youtube>
                        유튜브
                        <ResInput52 type={'text'} placeholder='링크를 복사해주세요.'></ResInput52>
                    </Youtube>
                    <PhotoUpload>
                        사진첨부
                        <UploadList>
                            <Photo><span>+</span> <span>Upload</span></Photo>
                            <Photo><span>+</span> <span>Upload</span></Photo>
                            <Photo><span>+</span> <span>Upload</span></Photo>
                        </UploadList>
                    </PhotoUpload>
                    <MainSetting>
                        메인 설정
                        <RadioBox>
                            <input type={'radio'} name='main'></input>유튜브
                            <input type={'radio'} name={'main'}></input>사진
                        </RadioBox>
                    </MainSetting>
                    <FinalButton>
                        <Button>등록하기</Button>
                    </FinalButton>
                </Registration>
            </WrapperBody>
        </Body>
    )
}