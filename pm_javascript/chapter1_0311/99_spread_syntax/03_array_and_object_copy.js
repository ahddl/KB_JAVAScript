//Json
//JavaScript Object notation (자바스크립트 객체 표기법)

// {
//     "name": "홍길동",
//     "email":"honghonghong@gmail.com",
// }

fetch("https://jsonplaceholder.typicode.com/todos/1") //요청을 보냄
  .then((response) => response.json()) //응답 (데이터) 받아 저장?
  .then((json) => {
    const extendedData = { ...json };
    console.log("가져온 데이터 ", json);

    extendedData.title = "변경된 속성";
    console.log("확장된 데이터 ", extendedData);
  });
