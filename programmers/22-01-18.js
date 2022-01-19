//https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

solution(5);

// function solution(num){
//   if (num % 2 === 0){
//     return "Even"
//   } else{
//     return "Odd"
//   }
// }

//https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  const sum = arr.reduce();
  //reduce(), 합산할 데이터들을 모두 연산해서 결과를 리턴해준다. 배열에서만 사용할 수 있음.
}

function solution(arr) {
  const sum = arr.reduce((cu, el) => {
    return cu + el;
  }, 0);
  return sum / arr.length;
}

solution([1, 2, 3, 4]);

// arr=[2,3,4,5]

// const sum = arr.reduce((cu, el) => {
//     // cu : current - 누적된 값
//     // el : element - 배열의 각각의 요소
//     console.log(cu,el)
//     return cu + el
// }, 0)
// // 초기값

// sum

// function solution(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     //sum = sum + arr[i]
//     Number(sum);
//   }
//   return sum / arr.length;
// }

// solution([1, 2, 3, 4]);

// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  const center = Math.floor(s.length / 2);
  let answer = s[center];

  if (s.length % 2 === 0) {
    answer = s[center - 1] + answer;
  } else {
    answer;
  }
  return answer;
}

function solution(s) {
  const center = Math.floor(s.length / 2);
  const answer =
    s.length % 2 === 1 ? s[center] : s.slice(center - 1, center + 1);
  return answer;
}

//slice
//1. 문자열과 배열에 사용 가능
//2. 배열 얕게 복사 가능
