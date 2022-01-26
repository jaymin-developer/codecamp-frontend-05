// reduce cu 누적값, el 현재값
function solution(num) {
  let answer = 0;
  const result = new Array(500).fill(1).reduce((cu, el) => {
    if (cu !== 1) {
      answer++;
      return cu % 2 === 0 ? cu / 2 : cu * 3 + 1;
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}

//  forEach
// function solution(num){
//     let answer = 0;

//     new Array( 500 )
//         .fill( 1 )
//         .forEach( _ => {
//             if( num !==1 ){
//                 answer++;
//                 num = num % 2 === 0
//                 ? num / 2
//                 : (num * 3) + 1
//             }
//     })
//     return num !== 1 ? -1 : answer
// }

// function solution(num){
//     let answer = 0;
//     // 500번 안에 1이 나오면 함수를 종료
//     for ( let i = 0; i < 500; i++){
//         if ( num === 1){
//             return answer
//         }
//         answer++;
//         if(num % 2 === 0){
//             num = num/2
//         } else {
//             num = num * 3 + 1
//         }
//     }
//     // 500번 안에 1이 나오지 않아서 실행되는 로직
//     return -1
// }

//
// function solution(num) {
//     let answer = 0;
//     // true면 무한, while 안에는 break랑 return 넣어줘야함.
//     while( true ){
//         if( answer > 500) {
//             return -1
//         }
//         if( num % 2 === 0){
//             num = num/2
//         } else {
//             num = (num * 3) + 1
//         }
//         answer++

//         if(num === 1){
//         return answer
//         }
//     }
// }

//
// function solution(num) {
//     let answer = 0;
//     //조건식이 true일 때만 안쪽의 로직이 실행 , 무한 루프될 수 있으니 조심할 것
//     while( num !== 1 ){
//         if( answer > 500) {
//             return -1
//         }
//         if( num % 2 === 0){
//             num = num/2
//         } else {
//             num = (num * 3) + 1
//         }
//         answer++
//     }
//     return answer
// }
