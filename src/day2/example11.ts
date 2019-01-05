// class, static
// static 이 있으면 class명. 으로 바로 호출 가능

class Person11 {
  private static PI = 3.14;
  static abs() {

  }

  hello() {
    Person11.PI
  }
}

const PI = 3.14;
function abs() {}

export class Person111 {
  hello() {
    PI;
    abs()
  }
}

// private static 함수는 어디사 사용될까?
// 