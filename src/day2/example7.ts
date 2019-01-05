// class Types
// 할당시 값을 선언해주거나, 컨스트럭터에서 값을 할당해 주지 않으면 에러가 난다.
class Person1 {
  name: string = 'jieun'
  age: number
  constructor() {
    this.age = 32
  }
}

class Person2 {
  name!: string
}

console.log(new Person1())

const p2 = new Person2()
p2.name = '1234'
console.log(p2)

// 접근 제어자
class Person4 {
  private _name: string = 'jieun'
  set name(name: string) {
    this._name = name
  }
  get name(): string {  // set 함수 없고 get 함수만 있는 것은 readonly이다.
    return this._name
  }
  // public setName(name: string) {
  //   this._name = name;
  // }
}

class Person41{
  public readonly name: string = 'jieun'
}

const p4 = new Person4()
console.log(p4)
p4.name = 'Mark'
// p4.setName('mark')
console.log(p4.name)

const p41 = new Person41()
// p41.name = 'test'