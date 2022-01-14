//41. 조건문 실전 적용 - 점수에 따른 등급
function grade(score) {
  if (score > 100 || score < 0) {
    return "잘못된 점수입니다.";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

grade(105); // "잘못된 점수입니다"
grade(-10); // "잘못된 점수입니다"
grade(97); // "A"
grade(86); // "B"
grade(75); // "C"
grade(66); // "D"
grade(52); // "F"

//43. 마이페이지
const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

let count = 0; // 구매한 총 횟수 저장
let money = 0; // 구매한 총 가격
let tier = ""; // 등급

function grade() {
  for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
      count++;
      money = money + myShopping[i].price;
    }
  }

  if (count >= 5) {
    tier = "Gold";
  } else if (count >= 3) {
    tier = "Silver";
  } else if (count >= 0) {
    tier = "Bronze";
  }

  return `의류를 구매한 횟수는 총 ${count}회, 금액은 ${money}이며 등급은 ${tier}입니다.`;
}

grade(); //'의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.'
