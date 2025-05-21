/**
 * 원시타입
 * 숫자
 * 정수, 실수, 2진수, 8진수 16진수
 */

let integer = 123; //정수
console.log(integer);

let binary = 0x7b;
console.log(binary === 123);

//특정숫자를 0으로 나눌 떄 무한대가 나옴
console.log(0 / 123);
console.log(123 / -0);
console.log(123 / "test"); //NaN =Not a Number
