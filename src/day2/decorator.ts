// 컴파일 단계에서 상관 안한다.
// 데코레이터 달아놓으면 데코레이터에 시그니처가 맞는지는 확인, 동작시 알려면 런타임에서 체크된다.
// bind를 자동을 해준다. 

// class decorator
// @classDecorator() : factory 패턴 : 인자로 뭔가 들어오서 실행 후 리턴해주는 패턴
// method decorator

// property decorator
function propertyDecorator(target: any, propName: string): any {
  console.log(target);
  console.log(propName);
  return {
    writable: false
  };
}

class Test6 {
  @propertyDecorator
  name: string = 'Mark';
}

const test6 = new Test6();
test6.name = 'Anna'; // runtime error  : set 할수 없는 곳에 접근해야 하는데 접근했을 때 에러라고 알려준다?

// parameter decorator
// 클래스 내부에 프로퍼티에 밸리데이터 걸떄 들어와서는 안되는 값이 들어왔을때 경고문 정도로 사용한다.
