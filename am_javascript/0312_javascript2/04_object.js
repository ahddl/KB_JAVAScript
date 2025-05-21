// 키로 사용할 수 있는 것
// key = 문자, '문자열', 숫자
// value - 원시값, 객체 (배열, 함수 등도 포함)

let apple = {
  name: "사과",
  "name-test": "사과",
  "한글 키": "한글 사과이름",
  0: 100,
};

console.clear();
console.log(apple.name);
console.log(apple["한글 키"]);
console.log(apple[0]);

let nums = ["11", "test", "sample"];
console.log(nums[1]);
console.log("-------------");

const ojb = {
  a_name: "개냥이",
  age: 2,
};
// console.log(ojb.a_name);
// console.log(ojb.age);

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(ojb, "age"));
// getValue(object, key)

function addkey(object, key, value) {
  object[key] = value;
}
addkey(ojb, "feel", "행복해");
console.log(addkey); //이부분 해결안됨 다시 해보기

//key: value 같으면 짧게 줄일 수 있다.

const x = 0;
const y = 0;
const coord = { x, y };
console.log(coord);

function makeObj(name, age) {
  return { name, age };
}
const person = makeObj("sony", 3);
console.log(person);

//객체에 함수

const banana = {
  b_name: "바나나",
  //   display: function () {
  //     console.log("노랑색 바나나");
  //     console.log(this);
  //   },
  display: () => {
    console.log(this); //블라우저에서 this 는 윈도우를 가리킨다.
  },
};

console.log(banana.b_name);

banana.display();
