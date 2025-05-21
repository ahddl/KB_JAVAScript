// 스프레드 문법
// 하나로 뭉쳐있는 여러 값들의 집합을 전개해서 개별적인 값 목록으로 만든다.
//괄호를 벗겨낼때 사용함

console.log(`가장큰값: ${Math.max(10, 30, 20)}`);

let arr = [10, 40, 35];

console.log(arr);
console.log(...arr); //배열의 괄호를 없앤다? 라는 개념으로 이해?

console.log(`가장큰값: ${Math.max(...arr)}`);

// 객체에서도 스프레드를 사용하면 괄호가 다 사라짐

// 배열 여러개 전달
let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

console.log(`가장작은값: ${Math.min(...arr1, ...arr2)}`);

//일반 값과 혼합해서 사용 가능
console.log(`가장작은값: ${Math.min(...arr1, 5, ...arr2)}`);

//배열 합치기
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let str = "javascript";

console.log(str);
console.log(...str);
console.log([...str]); //배열형태
