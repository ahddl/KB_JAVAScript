//대소관계 비교 연산자
// >, <, >=, <=

console.clear();
console.log(2 > 3);
console.log(2 <= 3);

//연산자의 우선순위
let a = 2;
let b = 3;

let result = ((a + b) * 4) / 5;
console.log(result);

//동등 비교 관계 연산자 ==
// == 값이 같은가
// != 값이 다른가
// === 값과 타입까지 같은가
// !== 값과 타입이 다른가

console.log(2 == 2);
console.log(2 != 2);
console.log(2 === "2");
console.log(2 !== "2");
console.log(true == 1);
console.log(true === "1");
console.log(true === 1);

const obj1 = { name: "sony" }; //주소에 저장 0x001
const obj2 = { name: "sony" }; //주소에 저장 0x002
console.log("참조주소", obj1 === obj2); //참조 주소를 비교하기 때문에 같지 않다라고 출력된다.
console.log("name", obj1.name === obj2.name); //내부의 값은 같다
