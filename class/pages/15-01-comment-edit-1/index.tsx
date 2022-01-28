import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickIsEdit = (event) => {
    isEdits[event.target.id] = true;
    setIsEdits([...isEdits]);
  };

  return (
    <div>
      <h1>댓글 수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {isEdits[index] === false && (
            <div key={el._id}>
              <span>
                {el.title} {el.writer}
              </span>
              <button onClick={onClickIsEdit} id={index}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] && <div>수정하기화면</div>}
        </div>
      ))}
    </div>
  );
}
// import { gql, useQuery } from "@apollo/client";
// import { useState } from "react";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//     }
//   }
// `;

// export default function PaginationPage() {
//   const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
//   //   const [isEdit, setIsEdit] = useState(false);
//   const [isEdits, setIsEdits] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const onClickIsEdit = (event) => {
//     console.log(event?.target.id);
//     const aaa = isEdits;
//     aaa[event.target.id] === true;
//     console.log(aaa);
//     setIsEdits([...aaa]);
//     // setIsEdits();
//   };

//   return (
//     <div>
//       <h1>댓글 수정 연습!!!</h1>
//       {data?.fetchBoards?.map((el, index) => (
//         // index 0~9 10까지 진행. 클릭했을 때 true false 로 진행
//         <div key={el._id}>
//           {isEdits[index] === false && (
//             <div key={el._id}>
//               <span>
//                 {el.title} {el.writer}
//               </span>
//               <button id={index} onClick={onClickIsEdit}>
//                 수정하기
//               </button>
//             </div>
//           )}
//           {isEdits[index] === true && (
//             <div>
//               <div>===============</div>
//               <div>이것은 수정하기 화면</div>
//               <div>===============</div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// // 아이템 하나하나 쪼개서 진행, 게시글 하나하나, 그러면 state 각자 영향
// //
