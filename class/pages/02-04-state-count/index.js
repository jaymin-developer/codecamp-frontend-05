import { useState } from "react";

export default function setCount() {
  const [count, setCount] = useState(0);

  function zzz() {
    setCount(count + 1);
  }

  return (
    <div>
      <div> 현재 카운트 : {count}</div>
      <button onClick={zzz}>카운트 증가!!</button>
    </div>
  );
}

// Id 설정 없이, state와 setState로 화면과 연결된다.
