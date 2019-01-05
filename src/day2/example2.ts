interface Person2 {
  name: string
  age?: number  // ? optional age들어올수도 있고 안들어올 수도 있다.
}

const p21 = {
  name: 'jieun'
}

const p22 = {
  name: 'jieun',
  age: 32
}

function hello2(person: Person2):void {
  if (person.age === undefined) {
    return
  }
  console.log(`${person.name}, ${person.age.toString()}`)
}
