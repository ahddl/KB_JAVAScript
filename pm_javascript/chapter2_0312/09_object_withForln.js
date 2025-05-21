let product = {
  제품명: "7D 건조 망고",
  유형: "당절임",
  성분: "망고, 설탕, 메타중아황산나트륨, 치자황색소",
  원산지: "필리핀",
};

//객체 ={ key:'value', }

//함수명 printProduct1, 매개변수 product
const printProduct1 = (product) => {
  for (let key in product) {
    console.log(`${key} : ${product[key]}`);
  }
};

printProduct1(product);

// 객체 생성 방법
// 1. 객체 리터럴: {}를 사용하여 생성
// 2. 생성자 함수: new Object()
// 3. 클래스방식

//클래스 방식 : 객체의 틀을 정의하는 , method로 함수를 넣을 수 있다?
class Product {
  constructor(제품명, 유형, 성분, 원산지) {
    this.제품명 = 제품명;
    this.유형 = 유형;
    this.성분 = 성분;
    this.원산지 = 원산지;
  }
}

let value = new Product(
  "7D 건조 망고",
  "당절임",
  "망고, 설탕, 메타중아황산나트륨, 치자황색소",
  "필리핀"
); //객체형식으로 만들어짐

const printProduct = (product) => {
  for (let key in product) {
    console.log(`${key} : ${product[key]}`);
  }
};

printProduct(value);
