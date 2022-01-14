//수업 break와 continue

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 해당 부분은 넘어가고 다음부터 진행
//0
//1
//2

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 해당 부분은 넘어가고 다음부터 진행
//0
//1
//2
//4

//for - in - 객체를 반복할 수 있다.
const obj = {
  name: "철수",
  age: 12,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// 'name' '철수'
// 'age' 12

const str = "abcde";

for (let key in str) {
  console.log(key, str[key]);
}

// '0' 'a'
// '1' 'b'
// '2' 'c'
// '3' 'd'
// '4' 'e'

//for -of 각각의 요소들을 가져올 수 있다.
const str = "abcde";

for (let key of str) {
  console.log(key);
}

// 'a'
// 'b'
// 'c'
// 'd'
// 'e'

//forEach - 배열에만 사용할 수 있다. 매소드 // 배열.forEach(function) // 자주 씀
const arr = ["a", "b", "c"];
arr.forEach((data) => {
  console.log(data);
});

// 'a'
// 'b'
// 'c'

const arr = ["a", "b", "c"];
arr.forEach((data, index) => {
  console.log(data, index);
});

// 두번째 인자, 인덱스값
// 'a' 0
// 'b' 1
// 'c' 2

//while -최초식, 조건식, 증감식이 분할되어 사용, for와 동일 // 자주 씀
let current = 1; //로봇 현재 위치
let answer = 0; //이동 함수

while (current !== 100) {
  current++;
  answer++;
}

answer;

//99

//023. 숫자 더하기
function sum(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count = count + i;
  }
  return count;
}

// count(i=0) = 0 + 0
// count(i=1) = 0 + 1
// count(i=2) = 1 + 2
// count(i=3) = 3 + 3
// count(i=4) = 6 + 4
// count(i=5) = 10 + 5

sum(5); // 15
sum(3); // 6

//멘토님 풀이
function sum(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    //answer = answer + i
    answer += i;
  }
  return answer;
}

sum(3);
sum(5);

//024. 특정 문자열 세기
function countLetter(str) {
  let count = 0;
  str = str.toLowerCase(); //toLowerCase() - 소문자로 변경
  // str = str.toUpperCase(); 대문자로 변경
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count = count + 1;
    }
  }
  return count;
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6

//멘토님
function countLetter(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      answer++;
    }
  }
  return answer;
}

countLetter("I am from Korea");
countLetter("A day without laughter is a day wasted.");

// 025. 문자열 삽입
function makeNumber(num) {
  let str = "1";
  for (let i = 2; i <= num; i++) {
    str = str + "-" + i;
  }
  console.log(str);
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

//멘토님
function makeNumber(num) {
  let answer = "";
  for (let i = 1; i <= num; i++) {
    answer += i;
    if (i !== num) {
      answer += "-";
    }
  }
  return answer;
}

makeNumber(5);

//내 풀이
function makeNumber(num) {
  row = [];
  for (let i = 1; i <= num; i++) {
    row.push(i);
  }
  console.log(row.join("-"));
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

//026. 홀수 문자열 내 풀이
function makeOdd(num) {
  list = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      list.push(i);
    }
  }
  console.log(list.join("")); //join을 하면 문자열
}

makeOdd(5); // 135
makeOdd(7); // 1357

//정답
function makeOdd(num) {
  let answer = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      answer = answer + i;
    }
  }
  console.log(answer);
}

//027. 가장 큰 수 찾기 더 고민하기
function bigNum(str) {
  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    if (Number(str[i]) >= max) {
      max = Number(str[i]);
    }
  }
  console.log(max);
}

bigNum(12345); // 5
bigNum(87135); // 8

// 내 풀이
function bigNum(str) {
  let list = [];
  str = String(str);
  for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
    list.sort();
  }
  console.log(Number(list[str.length - 1]));
}

bigNum(12345); // 5
bigNum(87135); // 8
