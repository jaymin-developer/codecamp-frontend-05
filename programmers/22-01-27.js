// 매서드
function solution(numbers) {
  const answer = new Set([]);

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum);
    });
  });
  return Array.from(answer).sort((a, b) => a - b);
}

// Set
// function solution(numbers) {
//     const answer = new Set([]);
//     for( let i=0; i < numbers.length; i++){
//         for( let l=i+1; l<numbers.length; l++){
//             const sum = numbers[i] + numbers[l];
//             answer.add( sum )
//             }
//         }
//         return Array.from(answer).sort((a,b)=> a - b)
//     }

// set 문법
// new Set();
// new Set([]);
// 1. 배열 형태를 가지는 객체 데이터
// 2. 고유한 값만 저장 (중복 데이터가 들어오지 않음)

// a = new Set([1,2,3,2])
// 데이터 추가
// a.add(4)
// 데이터 삭제
// a.delete(2)
// 데이터 조회
// a.has(4)
// 길이 조회
// a.size
// 데이터 리셋
// a.clear()
// 반복문
// a.forEach(el => {
//console.log(el)
//}) // 3, 1, 3, 4
// 배열로 변환
// b = Array.from( a )
// b // [1,2,3]

// for, includes, push, sort
// function solution(numbers) {
//     const answer = [];
//     for( let i=0; i < numbers.length; i++){
//         for( let l=i+1; l<numbers.length; l++){
//             const sum = numbers[i] + numbers[l];
//             if( answer.includes(sum) === false){
//                 answer.push( sum );
//             }
//         }
//     }
//     return answer.sort((a,b)=> a - b)
// }
