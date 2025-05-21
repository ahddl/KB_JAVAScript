// 제어문 - 반복문 (for)

// let i = 0;
// i<5;
// i++;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//중첩

for (let i = 0; i < 5; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log("--", j + 1);
  }
}

//for(;;){}

//반복문 제어 - continue(건너뛴다), break(코드종료한다.)
for (let a = 0; a < 20; a++) {
  if (a === 10) {
    continue; //10을 건너뜀
    console.log("10입니다.");
    // break;
  }
  console.log(a);
}

//반복문은 배열과 객체 데이터를 다룰 때 많이 사용됨
let fruits = ["딸기", "포도", "멜론", "체리"];
console.log(fruits);
// console.log(fruits[1]);
//자바스크립트는 순서가 일정하지는 않다, 인덱싱을 통해서 찾아 갈 수 있음
for (let i = 0; i < fruits.length; i++) {
  console.log("---------");
  console.log(fruits[i]);
}

// forEach() : 배열과 함께 사용할 수 있는 배치 함수
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
console.clear();
fruits.forEach((fruits, i, arr) => {
  console.log(fruits);
  console.log(i);
  console.log(arr);
  console.log("-------");
});
//'직사각형'=속성, '정사각형'=함수

for (let one of fruits) {
  console.log(fruits);
}

//객체를 반복문으로 출력
let members = {
  manager: "한식이",
  designer: "두식이",
  devel: "세식이",
};

for (let m in members) {
  console.log(m);
  console.log(members[m]);
}
