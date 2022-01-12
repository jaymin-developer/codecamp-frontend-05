import styled from "@emotion/styled"
import { useState } from "react"

export default function StateSginup(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ password2, setPassword2 ] = useState("")
    const [ emailError, setEamilError ] = useState("")
    const [ passwordError, setPasswordError ] = useState("")

    const Error = styled.div`
        color: red;
    `

    function aaa(event){
        // event.target => <input type="text" /> 태그 전체를 가져옴
        console.log(event.target.value) // => 해당 태그의 값을 가져옴
        setEmail(event.target.value) ///
    }

    function bbb(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function ccc(event){
        console.log(event.target.value)
        setPassword2(event.target.value)
    }

    function ddd(){

        if(email.includes("@") === false){
            // alert("이메일에 @가 없습니다. 잘못된 이메일이네요.")
            setEamilError("이메일에 @가 없습니다. 잘못된 이메일이네요.")
        } else {
            setEamilError("")
            
        }

        if(password !== password2){
            setPasswordError("비밀번호와 비밀번호확인이 일치하지 않습니다.")
        } else {
            setPasswordError("")
        }
    }

    return(
        <div>
            이메일: <input type="text" onChange={aaa}/> <br />
            <Error><span>{emailError}</span></Error><br /> <br /> 
            비밀번호: <input type="password" onChange={bbb}/> <br />
            <Error><span>{passwordError}</span></Error><br /> <br /> 
            비밀번호 확인: <input type="password" onChange={ccc}/> <br />
            <Error><span>{passwordError}</span></Error><br /> <br /> 
            <button onClick={ddd}>회원가입</button>
        </div>
    )

}

// event : 발생할 때마다 실행시켜줌.
// 이벤트 핸들러 함수
// 이모션으로 css처리하기