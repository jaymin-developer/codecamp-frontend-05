//자연수 뒤집어 배열로 만들기

function solution(n) {
  var answer = [];
  n = String(n); // 문자타입으로 변환
  // n = n.toString() 변수에 사용할 수 있는 메서드

  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// reverse 활용
function solution(n) {
  var answer = [];
  n = String(n); // 문자타입으로 변환
  // n = n.toString() 변수에 사용할 수 있는 메서드

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  return answer.reverse();
}

// sort
function solution(n) {
  var answer = [];
  n = String(n); // 문자타입으로 변환
  // n = n.toString() 변수에 사용할 수 있는 메서드

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  return answer.sort((a, b) => {
    return b - a;
  });
}

// 메서드
function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((el) => {
      return Number(el);
    })
    .reverse();
  return answer;
}

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
      answer.sort((a, b) => {
        return a - b;
      });
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

// 메서드
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
