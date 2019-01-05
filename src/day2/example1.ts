interface Person1 {
  name: string
  age: number
}

const p1: Person1 = {
  name: 'jieun',
  age: 32
}

function hello1(person: Person1 ): void {
  console.log(`hello, I'm ${person.name}`)
}

hello1(p1)