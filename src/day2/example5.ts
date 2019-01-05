interface IPerson5 {
  name: string
  age?: number
}

class Person5 implements IPerson5 {  // 상속 X, 구현만 O
  name: string = 'Jieun'
  age: number = 32
}