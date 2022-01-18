export default function BoardListUI(props) {
  return (
    <div>
      <div>작성자: {props.data?.fetchBoard?.writer}</div>
      <div>제목: {props.data?.fetchBoard?.title}</div>
      <div>내용: {props.data?.fetchBoard?.contents}</div>
    </div>
  );
}
