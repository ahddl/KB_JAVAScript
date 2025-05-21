// li 요소를 클릭하면 모든 li 에 .active 삭제한다
// li 요소를 클릭하면 클린된 대상에 .active 붙는다

const $lists = document.querySelectorAll(".con>li");
const $con = document.querySelector(".con");

// $lists.forEach((el, i) => {
//   el.addEventListener("click", (e) => {
//     $lists.forEach((elm) => {
//       elm.classList.remove("active");
//     });

//     console.log("리스트가 클릭", i);
//     console.log("이벤트객체 target", e.target);
//     console.log("이벤트객체 currentTarget", e.currentTarget);
//     el.classList.add("active");
//   });
// });

// $lists.forEach((el, i) => {
//   el.addEventListener("click", function (e) {
//     console.log("this", this);

//     $lists.forEach((elm) => {
//       elm.classList.remove("active");
//     });

//     this.classList.add("active");
//   });
// });

// $con.addEventListener("click", (e) => {
//   console.log("currentTarget", e.currentTarget);
//   console.log("Target", e.Target);
//   console.log("Target", e);
//   if (e.target === p) {
//     console.log("p 요소입니다.");
//     return;
//   } else {
//     console.log("p 요소가 아닙니다.");
//   }
// });

$con.addEventListener("mouseenter", () => {
  console.log("마우스 진입");
});
$con.addEventListener("mouseleave", () => {
  console.log("마우스 빠져나감");
});
$con.addEventListener("mousemove", () => {
  console.log("마우스 움직");
});
