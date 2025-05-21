const lists = document.querySelectorAll(".list>li");
console.log(lists);

//한꺼번에 적용하기
for (let i = 0; i < lists.length; i++) {
  //   lists[i].style.fontSize = "2rem";
  //   lists[i].style.color = "tomato";
  //위 두 줄을 한 줄로 정의 가능
  lists[i].style.cssText = `color:tomato; font-size:2rem`;
}

//forEach는 콜백 함수로 받아온다., 순서는 중요한데 중간에 안쓰고 싶다는 _로 표기
//한줄 한줄 적용하기
lists.forEach((li, i) => {
  console.log("----", li);
  console.log("index", i);
  lists[i].style.cssText = `color:tomato; font-size:2rem`;
});
