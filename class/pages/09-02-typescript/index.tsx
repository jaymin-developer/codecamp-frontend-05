export default function TypescriptPage(){
//typescript
// 타입 추론
// let aaa = "안녕하세요"
// aaa = 3

//문자타입
// let bbb: string;
// bbb = "반갑습니다"
// bbb = 123

//숫자타입
// let ccc : number = 5
// ccc = "abcd"

// 불린타입
// let ddd : boolean
// ddd = 123
// ddd = "trree"
// ddd = false
// ddd = true

//배열타입
// let eee : number[] = [1, 2, 3, 4, 5, 6, "안녕"]
// let fff : string[] = ["철수", "영희", "훈이", 13]
// let ggg : (string | number)[] = [1, 2, 3, "철수", "영희"]
// let hhh : string[] | number[] = [1, 2, 3]
// hhh = [1, 2, 3]

// 객체타입
// interface Iprofile {
//     name : string
//     age : number | string
//     school : string
// }

// const profile : Iprofile = {
//     name : "철수",
//     age : 8,
//     school : "다람쥐초등학교"
// }

// profile.age = "123세"


return(
    <div>
    타입스크립트 연습!!!
    </div>
)

}