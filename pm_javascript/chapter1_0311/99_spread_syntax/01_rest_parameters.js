// rest parameter (나머지 매개변수)

function merge(msg1, msg2) {
  return msg1 + msg2;
}
console.log(merge("안뇽", "반갑"));
console.log(merge("안뇽", "반갑", "잘가"));

function mergeAll(...args) {
  //한번에 다 저장하기
  let message = "";

  for (let arg of args) {
    message += arg;
  }

  return message;
}
console.log(mergeAll("안뇽", "반갑"));
console.log(mergeAll("안뇽", "반갑", "잘가"));

//(...)나머지 매개변수는 항상 마지막에 있어야한다.
// function mergeAll(arg1, ...args, art2){}  ===> 틀림xxx
