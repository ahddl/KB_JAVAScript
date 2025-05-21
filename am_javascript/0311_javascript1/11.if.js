//실행 순서를 제어하는 것을 제어문
// 조건문, 반복문

//if(조건식){실행문}
//if(조건식){실행문}else{실행문}
//if(조건식){실행문}else if(조건문){실행문}else{실행문}

console.clear();

let fruit = "orange";
if (fruit === "apple") {
  console.log("사과");
} else if (fruit === "orange") {
  console.log("오렌지");
} else {
  console.log("사과도 오렌지도 아님");
}

if ("tt") {
  console.log("true입니다.");
} else {
  console.log("false입니다.");
}

//삼항연산자
//조건식 ? 참일 경우 실행 내용 : 거짓일경우 실행내용
"text" ? console.log("참이네") : console.log("거짓이네");
fruit === "배 " ? console.log("배 맞습니다.") : console.log("배 아닙니다.");

//입력된 숫자가 짝수면 '짝' 홀수면 '홀'을 출력하는 Javascript
