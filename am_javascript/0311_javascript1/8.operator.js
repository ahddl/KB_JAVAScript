//javascript 의 연산자

/**
 * 데이터 처리를 위한 연산자의 종류 --> 찾아보기!
 *
 * 리터럴 (코드에서 값을 나타내는 표기법)
 * - 문자 리터럴, 숫자리터럴, 불리언리터럴
 *
 * 문 : 코드에서 최소 실행단위를 말함
 * 반복문, 조건문, 할당문
 *
 * 표현식 - 값으로 평가될 수 있는 문
 * 1
 * 1+1
 * call() -함수호출표현식
 */

let b; //선언문 -표현식이 아니라 그냥 문이다.
b = 2; //할당문

//산술연산자 + , - , * , / , %, **(거듭제곱)
console.log(5 + 1);
console.log(5 - 1);
console.log(5 * 1);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);
console.log(Math.pow(5, 2)); //내장객체 사용

//문자에서 산술 연산자가 사용될 때
let text = "안녕" + "하세요";
console.log(text);
let text2 = 10 + "5";
let text3 = 10 + "어어";
let text4 = 10 + 5;
console.log(text2);
console.log(text3);
console.log(text4);
