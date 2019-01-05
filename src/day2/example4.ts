// interface Person4 {
//   name: string
//   hello(age: number): void  // 인터페이스 안에 함수가 하나 추가 되어 있는 상태. (객체의 인터페이스인데 그 안에 함수가 있다.)
// }

// const p41: Person4 = {
//   name: 'jieun',
//   hello: function(age: number) {  // 함수는 할당할 떄 타입 체크 안하고 사용할 때 타입 체크 한다.
//     console.log(this.name, age);
//   }
// }

// const p42: Person4 = {
//   name: 'jieun',
//   hello() {

//   }

// }