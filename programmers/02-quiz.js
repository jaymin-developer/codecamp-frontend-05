//018. 조건문 연습

function boolean(input1, input2) {
	if(input1 === false && input2 === false) {
    console.log(false)
  } else {
    console.log(true)
  }
}

boolean(true, true)
boolean(true, false)
boolean(false, false)
boolean(false, false)

//019. 홀짝
function evenOdd(num) {
	if (num === 0) {
		console.log("Zero");
	} else if (num % 2 === 0) {
		console.log("짝수");
	} else  {
		console.log("홀수");
	}
}

evenOdd(12)
evenOdd(15)
evenOdd(0)

//020. 온도
function temperature(number) {
	
	if (number >= 24) {
		console.log("조금 덥습니다");
	} else if (number >=19){
    console.log("날씨가 좋네요");
  } else {
    console.log("조금 춥네요")
  }
}

temperature(13)
temperature(23)
temperature(27)

//021. 몇일
function days(month) {
  
	if (month === 2) {
		console.log("28");
	} if (month === 4 || month === 6 || month === 9 || month === 11){
    console.log("30")
  } else {
    console.log("31")
  }
}

for (let i=1; i <13; i++){
   days(i)
}


