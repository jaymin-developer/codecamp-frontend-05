import {Body, WrapperHead, LoginBar, Carousel, WrapperBody, 
        Nav, Registration, H1, RegistrationTop, Name, Password, Title, 
        Content, Address, AddSearch, Youtube, PhotoUpload, UploadList, 
        Photo, MainSetting,RadioBox,FinalButton, Button, ResInput52, ResInput480,
        AddButton, Message} from '../../../styles/emotion'

import { useState } from "react"

export default function Newpage() {

    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ errorName, setErrorName ] = useState("")
    const [ errorPassword, setErrorPassword ] = useState("")
    const [ errorTitle, setErrorTitle ] = useState("")
    const [ errorContent, setErrorContent ] = useState("")
    const [ errorAddress, setErrorAddress ] = useState("")


    function checkName(event){
        setName(event.target.value)
    }

    function checkPassword(event){
        setPassword(event.target.value)
    }

    function checkTitle(event){
        setTitle(event.target.value)
    }

    function checkContent(event){
        setContent(event.target.value)
    }

    function checkAddress(event){
        setAddress(event.target.value)
    }

    function clickFinal(){

        if(name === ""){
            setErrorName("이름을 입력해주세요.")
        } else {
            setErrorName("")
        }

        if(password === ""){
            setErrorPassword("비밀번호를 입력해주세요.")
        } else {
            setErrorPassword("")
        }

        if(title === ""){
            setErrorTitle("제목을 입력해주세요.")
        } else {
            setErrorTitle("")
        }

        if(content === ""){
            setErrorContent("내용을 입력해주세요.")
        } else {
            setErrorContent("")
        }

        if(address === ""){
            setErrorAddress("주소를 입력해주세요.")
        } else {
            setErrorAddress("")
        }
    }

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
                            작성자 * 
                            <ResInput52 type={'text'} placeholder='이름을 적어주세요.' onChange={checkName}></ResInput52>
                            <Message>{errorName}</Message>
                        </Name>
                        <Password>
                            비밀번호 *
                            <ResInput52 type={'password'} placeholder='비밀번호를 입력해주세요.' onChange={checkPassword}></ResInput52>
                            <Message>{errorPassword}</Message>
                        </Password>
                    </RegistrationTop>
                    <Title>
                        제목 *
                        <ResInput52 type={'text'} placeholder='제목을 입력해주세요.' onChange={checkTitle}></ResInput52>
                        <Message>{errorTitle}</Message>
                    </Title>
                    <Content>
                        내용 *
                        <ResInput480 type={'textarea'} placeholder='내용을 작성해주세요.' onChange={checkContent}></ResInput480>
                        <Message>{errorContent}</Message>
                    </Content>
                    <Address>
                        주소 *
                        <AddSearch>
                            <ResInput52 type={'text'} placeholder='07250'></ResInput52> <AddButton>우편번호 검색</AddButton>
                        </AddSearch>                        
                        <ResInput52 type={'text'} ></ResInput52>
                        <ResInput52 type={'text'} placeholder='상세주소를 입력해주세요.' onChange={checkAddress} ></ResInput52>
                        <Message>{errorAddress}</Message>
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
                        메인 설정 *
                        <RadioBox>
                            <input type={'radio'} name='main'></input>유튜브
                            <input type={'radio'} name={'main'}></input>사진
                        </RadioBox>
                    </MainSetting>
                    <FinalButton>
                        <Button onClick={clickFinal}>등록하기</Button>
                    </FinalButton>
                </Registration>
            </WrapperBody>
        </Body>
    )
}