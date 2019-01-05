// generic class
class Person20<T, K> {
  name!: T;
  age!: K;
  constructor(name: T, age: K) {

  }
}

const p20 = new Person20('jieun', 32)
// p20.age = 'male' age 타입이 number로 지정되어있어서 에러난다.

// generic 사용시 유용한점
interface Person21 {
  name: string
  age: number
}

type a = keyof Person21  // name과 age 리터럴 타입

const person21 = {
  name: 'jieun',
  age: 32
}

function getProperty<T, K extends keyof T>(
  person: T,
  key: K
): T[K] {
  return person[key]
}

console.log(getProperty(person21, 'name'))

function setProperty<T, K extends keyof T>(
  person: T,
  key: K,
  value: T[K]
): void {
  person[key] = value
}

setProperty(person21, 'age', 34)