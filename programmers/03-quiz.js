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

//024. 특정 문자열 세기
function countLetter(str) {
  let count = 0;
  str = str.toLowerCase(); //toLowerCase() - 소문자로 변경
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count = count + 1;
    }
  }
  return count;
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6

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
  let str = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      str = str + i;
    }
  }
  console.log(str);
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
