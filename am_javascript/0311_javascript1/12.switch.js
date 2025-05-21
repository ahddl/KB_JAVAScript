//switch 문법

let today = new Date();
let day = today.getDay();
console.clear();
console.log(today);
console.log(day);

// console.log(today.getHours());
// console.log(today.getDate());
// console.log(today.getDay()); //0 -> 일요일, 1 -> 월...

let dayName;
if (day === 0) {
  dayName = "일요일";
  console.log(dayName);
} else if (day === 1) {
  dayName = "월요일";
  console.log(dayName);
} else if (day === 2) {
  dayName = "화요일";
  console.log(dayName);
} else {
}

switch (day) {
  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;
  default:
    console.log("해당요일 없음");
}
console.log("switch", dayName);
