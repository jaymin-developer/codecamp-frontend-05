//018. 조건문 연습

function boolean(input1, input2) {
	if(input1 === false && input2 === false) {
    return "false";
  } else {
    return "true";
  }
}

boolean(true, true)
boolean(true, false)
boolean(false, false)
boolean(false, false)

//019. 홀짝
function evenOdd(num) {
	if (num === 0) {
		return "Zero";
	} else if (num % 2 === 0) {
		return "Even";
	} else  {
		return "Odd";
	}
}

evenOdd(12)
evenOdd(15)
evenOdd(0)

//020. 온도
function temperature(number) {
	
	if (number >= 24) {
		return "조금 덥습니다";

	} else if (number >=19){
    return "날씨가 좋네요" 

  } else {
    return "조금 춥네요"
  }
}

temperature(13)
temperature(23)
temperature(27)

//021. 몇일
const month < 13

function days(month) {
  
    if (month === 2) {
		  return 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11){
        return 30;
    } else {
        return 31;
    }
}

for (let i=1; i <13; i++){
   days(i)
}

//수업
const day = "화요일";

switch( day ){
  case "월요일" :
    "월요일 입니다.";
  case "화요일" :
    "화요일 입니다.";
  case "수요일":
    "수요일 입니다."
  default :
    day + "입니다."
}
    
//switch와 case는 하나의 세트
//case가 맞지 않아도 이 로직을 그냥 실행함.
//방지하는 방법은 break;
// else와 다르게 dafault를 쓴다.
// default를 걸어주면 하나하나 case마다 브레이크를 걸어줌.
// default는 case 아래에 있어야 함. 위에 있으면 무시당함.

// 022. 미니 계산기

function calculator(num1, num2, operator){
	if (operator === "+") {
		return(num1 + num2)

	} else if(operator ==="-") {
		return(num1 - num2)

	} else if(operator ==="*") {
		return(num1 * num2)

	} else if(operator ==="/") {
		return(num1 / num2)

	}
}

calculator(10,5, '+')  // 15
calculator(10,5, '-')  // 5
calculator(10,5, '*')  // 50
calculator(10,5, '/')  // 2
calculator(10,5, 'a')  // "올바른 입력이 아닙니다"