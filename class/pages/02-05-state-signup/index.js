import { useState } from "react";

export default function StateSginup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEamilError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function aaa(event) {
    // event.target => <input type="text" /> 태그 전체를 가져옴
    console.log(event.target.value); // => 해당 태그의 값을 가져옴
    setEmail(event.target.value); ///
  }

  function bbb(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function ccc() {
    console.log("email:", email);
    console.log("password:", password);

    if (email.includes("@") === false) {
      // alert("이메일에 @가 없습니다. 잘못된 이메일이네요.")
      setEamilError("이메일에 @가 없습니다. 잘못된 이메일이네요.");
    } else {
      setEamilError("");
    }

    if (password.length < 8) {
      setPasswordError("패스워드는 8자리 이상 입력해주세요.");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={aaa} /> <br />
      <span>{emailError}</span>
      <br /> <br />
      비밀번호: <input type="password" onChange={bbb} /> <br />
      <span>{passwordError}</span>
      <br /> <br />
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}

// event : 발생할 때마다 실행시켜줌.
// 이벤트 핸들러 함수
// 이모션으로 css처리하기
