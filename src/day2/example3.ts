// name은 항상 있어야 되고 age 는 있어도 되고 없어도 되고, 나머지 프로퍼티는 있어도 되고 없어도 되는 상태.
interface Person3 {
  name: string
  age?: number
  [index: string]: any // 나머지 프로퍼티는 어떤 값이어도 상관 없다.
}

const p3: Person3 = {
  name: 'jieun',
  age: 32,
  gender: ['female', 'male']
}