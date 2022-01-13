import axios from "axios";
import { useState } from "react";

export default function restGet() {
  const [aaa, setAaa] = useState("");

  //   async function zzz() {
  //     const result = await axios.get("https://koreanjson.com/posts/1");
  //     console.log(result.data.title);
  //     setAaa(result.data.title);
  //   }
  // 화살표 함수
  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title);
    setAaa(result.data.title);
  };

  //   function zzz() {
  //     console.log("어쩔티비");
  //   }

  return (
    <>
      <button onClick={zzz}>Rest-API 요청하기!!!</button>
      <div>{aaa}</div>
    </>
  );
}

//zzz는 이벤트핸들러 함수
//함수가 중복되면 에러발생할 수 있음. 막으려면 함수를 const로
