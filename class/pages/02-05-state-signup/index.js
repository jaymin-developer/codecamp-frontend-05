// import { useState } from "react";

// function Login() {
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");
//   const [errorId, setErrorId] = useState("");
//   const [errorPw, setErrorPw] = useState("");

//   function handleChangeId(event) {
//     const value = event.target.value;
//     setId(value);
//   }

//   function handleChangePw(event) {
//     const value = event.target.value;
//     setPw(value);
//   }

//   function handleClickLogin() {
//     if (id === "") {
//       setErrorId("! 아이디를 정확히 입력해 주세요.");
//     }
//     if (pw === "") {
//       setErrorPw("! 비밀번호를 정확히 입력해 주세요.");
//     }
//     if (id !== "" && pw !== "") {
//       alert("아이디와 비밀번호가 모두 입력되었습니다. 로그인을 시작합니다.");
//     }
//   }

//   return (
//     <div>
//       <h1>로그인</h1>
//       <div>아이디 {id}</div>
//       <input type="text" onChange={handleChangeId} />
//       <div style={{ color: "red" }}>{errorId}</div>
//       <div>비밀번호 {pw}</div>
//       <input type="text" onChange={handleChangePw} />
//       <div style={{ color: "red" }}>{errorPw}</div>
//       <div>
//         <button onClick={handleClickLogin}>로그인</button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";

export default function StateSignup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function aaa(event) {
    // event.target => <input type="text" /> 태그 전체를 가져옴
    console.log(event.target.value); // => 해당 태그의 값을 가져옴
    setEmail(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ccc() {
    console.log("email :", email);
    console.log("password :", password);

    if (email.includes("@") === false) {
      // alert("이메일에 @가 없습니다. 잘못된 이메일이네요!!")
      setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!!");
    } else {
      alert("회원가입을 축하합니다!!!");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={aaa} />
      <br />
      <span>{emailError}</span>
      <br />
      비밀번호: <input type="password" onChange={bbb} />
      <br />
      <span>{passwordError}</span>
      <br />
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}
