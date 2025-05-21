// 주석
/**
 *
 * let, const, (var) : 변수선언
 */
console.clear();

let test = "텍스트";
console.log("출력확인", test);

test = 100;
console.log("출력확인3", test);

// let 변수 : (변경 가능)
let a = "test";
let b;
b = 100;
console.log(b);

//let b; 재할당은 가능하나 똑같은 이름으로 선언할 수는 없다. 같은 변수명으로 선언할 수 없다.

//const (변경 불가)
const c = "test4"; //선언만 불가 반드시 할당해야 함
c = "test5";

var d = "test";

const MAX_FRITS = 100;
