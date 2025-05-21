//내장객체
// 원시값을 필요에 따라 관련된 빌츠인 객체로 변화할 수 있다.
//필요성이 없어지면 다시 원시값으로 변환한다

const number = 123;
console.log(typeof number);

number.toString();
console.log(typeof number.toString());

const txt = "test";

console.log(txt.length);

let num2 = new Number(123);
console.log(num2);

let num3 = 122245523.1234;
console.log(num3.toFixed());
console.log(num3.toString());
console.log(num3.toLocaleString());
console.log(num3.toPrecision(5));

//Math  ---> 각각 뭔지 확인해보기
console.log(Math.PI);
console.log(Math.abs(-10)); //절댓값
console.log(Math.ceil(1.4)); //
console.log(Math.floor(1.8)); //
console.log(Math.round(1.6)); //
console.log(Math.random()); //

//string 에서 사용하는 내장객체
let str = " 안녕하세요 ";
console.clear();
console.log(str.length); //공백포함 길이
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.indexOf("안"));
console.log(str.lastIndexOf("안"));
console.log(str.includes("안")); //안이 있는지 확인_> 있다면 true 없다면 false
console.log(str.startsWith("영")); //특정문자로 시작하는가
console.log(str.endsWith("영")); //특정문자로 끝나는가
console.log("---", str.slice(5));
console.log(str.trim()); //앞뒤로 공백제거

let long = "여러분 반갑습니다. 오늘도 화이팅";
// 공백으로 배열을 만들기
console.log(long.split(" ")); //공백 간격으로 하나하나 배열
console.log(long.split(".", 1)); //. 간격으로 한개만 배열

console.log(new Date());
console.log(new Date("jun 5, 2025"));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getDate()); //날짜
console.log(now.getDay()); //요일 (일-0)
console.log(now.toDateString());
console.log(now.toLocaleString());
