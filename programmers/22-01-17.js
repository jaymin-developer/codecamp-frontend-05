//https://programmers.co.kr/learn/courses/30/lessons/12925

// function solution(s) {
//     s = Number(s)
//     return s;
// }

// function solution(s) {
//     return +s
// }

function solution(s) {
  return s * 1;
}

//https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// function solution(arr){
//     const answer =[];

//     for (let i=0; i < arr.length; i++){
//         if( arr[i] !== arr[i-1]){
//             answer.push( arr[i] )
//         }
//     }
//     return answer
// }

// function solution(arr)
// {
//     var answer = [];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] !== arr[i+1]){
//             answer.push(arr[i])
//         }
//     }
//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

//     return answer;
// }

//     solution('Hello Javascript')

//https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  let answer = "";
  answer = answer.padStart(phone_number.length - 4, "*");
  answer += phone_number.slice(phone_number.length - 4, phone_number.length);
  return answer;
}
// 알고리즘 및 프로젝트할 때 slice 자주 사용함!
// padStart 문자열에 쓰는 메서드
//  str.padStart(6, "*")

// function solution(phone_number){
//     let answer = "";

//     for (let i=0; i < phone_number.length; i++){
//         if (i<phone_number.length - 4){
//             answer += "*"}
//         else {
//                 answer += phone_number[i]
//             }
//     }
//     return answer
// }

// function solution(phone_number) {
//     var answer =  "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
//     return answer;
// }
