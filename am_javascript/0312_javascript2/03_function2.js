// 선언함수 function name(){}
// 익명함수 const name = function(){}
// 화살표함수 const name=()=>{}
// parameters
// arguments
// return

// 생성자 함수 new Date() 객체를 생성

function add(a, b, c, d, e) {
  console.log(a);
}
add(1, 2, 3, 4, 5);

function add2(a, b) {
  console.log(a);
  console.log(b); //undefined로 나타남
}
add2(1);

function add3(a = 0, b = 0, ...num) {
  console.log(a);
  console.log(b); //undefined로 나타남
  console.log(num);
}
add3(4, 3, 1, 6, 7);

// 점수를 입력하면
// 입력된 점수가 60이하 ='f'
// 입력된 점수가 60~80 = 'b'
// 입력된 점수가 80~90 = 'a'
// 입력된 점수가 90 이상 = 'A+'
// grade('이름', 90)       ---- 만들어보기

console.clear();

function grade(name, num) {
  console.log(name);
  switch (num) {
    case 60:
      console.log("F");
      break;
    case 80:
      console.log("B");
      break;
    case 90:
      console.log("A");
      break;
    default:
      console.log("A+");
  }
} //switch는 범위는 불가능 if로 다시 작성해야함

grade("홍길동", 83);

// 콜백함수
const add4 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calclator = function (a, b, action) {
  //여기서 action이 콜백함수라고 볼수 있음
  let result = action(a, b);
  console.log(result);
};
calclator(3, 4, add4);
calclator(3, 4, multiply);
