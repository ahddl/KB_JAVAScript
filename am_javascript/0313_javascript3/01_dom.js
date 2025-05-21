console.log("외부파일");

//document.get~s~~ : 복수형태는(s) 여러 개를 배열형태로 가져오는 경우
const $target = document.getElementsByClassName("target");
console.log("$target--", $target);

//쿼리 한개 선택
const $ul = document.querySelector(".list");
console.log($ul);
$ul.style.background = "red";

//배열
const $ul2 = document.querySelectorAll(".list");
console.log($ul2);

//클래스 이름이라 . 찍을 필요는 없음, 배열
const $ul3 = document.getElementsByClassName("list");
console.log($ul3);

//id 사용, 번호 붙여 여러개 하는 것
let output = "";
const $target2 = document.getElementById("target");
console.log($target2);

for (let i = 0; i < 10; i++) {
  output += `<p>${i + 1}번째 요소</p>`;
}

$target2.innerHTML = output;
$target2.textContent = output;
