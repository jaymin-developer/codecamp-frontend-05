export default function LetHello() {
  let qqq = "안녕하세요";

  function zzz() {
    document.getElementById("qqq").innerText = "반갑습니다";
  }

  return (
    <div>
      <div id="qqq">{qqq}</div>
      <button onClick={zzz}>클릭!!</button>
    </div>
  );
}
// onClike=() 이었지만 JSX로 onClick={변수나 함수}
// let, const -> html로 연결 X
