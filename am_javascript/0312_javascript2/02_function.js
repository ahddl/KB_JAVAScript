//객체 {}, 배열 []

//함수() : 특정한 일을 하는 코드의 집합
//선언함수: 이름이 있는 함수,  익명함수
// function 함수이름(){}
// let 함수이름 = function(){}

// 함수이름()   : 참조 주소가 할당되었다 모든 함수는 heap에 저장
// 함수는 어디에나 만들어도 상관없음
//함수는 호출이 일어나기 전까지 실행되지 않음

add();
function add() {
  console.log("함수호출");
}

console.clear();

function add2(a, b) {
  return a + b;
}
let result = add2(2, 5);
console.log(result);

fullName("소영", "박"); //소영 박
fullName("삼식", "박"); //삼식 박

function fullName(a, b) {
  console.log(b, a);
}

function add3(a, b) {
  //   return a + b;
  console.log("test");
  return undefined;
}
// return 만 쓰면 undefined가 생략되었다.

let add4 = (a, b) => a + b;

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(1212);
