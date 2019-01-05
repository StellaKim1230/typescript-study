class Parent9 {
  constructor(protected _name: string, private _age: number) {}
  hello() {
    console.log(this._name, this._age)
  }
}

class Child9 extends Parent9 {
  constructor(name: string) {
    super(name, 36)
  }
}

new Child9('jieun').hello()