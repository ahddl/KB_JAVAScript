// 다음과 같은 패턴의 피라미드를 출력하는 함수를 작성하세요.
// 입력: 4 (4번 반복)
// 출력:
//    1
//   2 2
//  3 3 3
// 4 4 4 4



// 조건:
// - 함수는 높이를 매개변수로 받습니다.
// - 각 줄은 해당 줄의 숫자가 줄 번호만큼 반복됩니다.
// - 왼쪽 정렬이 아닌 피라미드 모양이어야 합니다.

console.clear();
let num = 4;
let temp = "";

for (let i = 1; i < num + 1; i++) {
  for (let j = num; j > i; j--) {
    temp += " ";
  }
  for (let a = 1; a < i + 1; a++) {
    temp += i + " ";
  }
  temp += "\n";
}
console.log(temp);
