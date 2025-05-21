//boolean - true, false
//변수 이름을 is 로 시작하면 좋음

const { log } = require("console");

let isFree = true;
console.log(isFree);

//값 앞에 !! 를 붙이면 boolean 타입으로 변경할 수 있다.
//falshy 값
console.log(!!0); //0이 갖는 boolean 타입이 ture 냐 fasle 냐를 볼 수 있음?
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefinded);
console.log(!!NaN);

//truthy 값
console.log(!!1);
console.log(!!-1);
console.log(!!"test");
console.log(!!{});
console.log(!!Infinity);

console.clear();
//null 비었다
let test = null;
console.log(typeof test);
