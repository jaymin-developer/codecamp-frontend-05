// 001. 선언과 할당
let name = '재민'
console.log(name)

// 002. 재할당
let name = '재민'
name = '철수'
console.log(name)

// 003. 배열의 선언과 할당, 매서드 찾기
let fruits = []
fruits.push('사과');
fruits.push('바나나');
fruits.push('파인애플');
console.log(fruits)

// fruits[0] = '사과'
// fruits[1] = '바나나'
// fruits[2] = '파인애플'

// 004. 배열의 기능
let fruits = ['사과','바나나', '파인애플']
let newFruits = []
newFruits.push(fruits[fruits.length-1]);
console.log(newFruits)

// 005. 배열의 기능
let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr = students.slice(0,3)
console.log(newArr)

// 006. 배열의 기능
let fruits = ["사과", "바나나"]
for (let i=0; i<fruits.length; i++){
  fruits[i] ="맛있는 " + fruits[i]
}
console.log(fruits)

// 007. 문자열 배열
const number = "01012345678"
let arr = []
arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7,11))
console.log(arr)

// 008. 객체의 선언과 할당
let student = {}
student.name = "철수" //student["school"]와 동일. 변수들을 넣을 때 활용.
console.log(student)

// 009. 객체의 키&값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school // student['school'] = school;
console.log(student)

// 010. 객체의 키&값 삭제
let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink

console.log(student)

// 011. 객체와 배열의 값
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교"

console.log(classmates)


// 013. 데이터 타입 구분
let str = "3"
let number = 3

console.log(typeof str)
console.log(typeof number)

// 014. 배열과 객체의 데이터 타입
let array = []
let object = {}

console.log(typeof array) // object
console.log(typeof object) // object
console.log(Array.isArray(array)) // true
console.log(Array.isArray(object)) // false

// 015. 데이터 타입 변경
let num = 24
let str = String(num)

console.log(typeof str)

//016. 연산자 연습
1 + "1" // '11'

1 - "1" // 0

"1" + "1" // '11'

1 * "1" // 1

3 * "A" // NaN

1 + 1 + '1' //'21'

'1' + 1 + 1 //'111'

"11" - 1 //10

"11" + 1 //'111'

"홍" + "길동" // '홍길동'

20 === "20" // false

20 == "20" // ture

!true // false

// 017. &&. ||
(20 >= 10) && (20 === 10) // false

(20 === 10) || (10 === 10) // true

