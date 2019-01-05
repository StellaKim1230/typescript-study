"use strict";
class Person6 {
    constructor(name) {
        this.name = name;
        // this.name = name
    }
}
new Person6('Jieun');
class Person7 {
    hello() { }
}
class Parent8 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(`${this._name}, ${this._age}`);
    }
}
class Child8 extends Parent8 {
    constructor() {
        super(...arguments);
        this._name = '지은'; // default 가 public이기 때문에 오버라이딩 하면서 접근제어자가 protected에서 public으로 바뀌었다.
    }
}
const c8 = new Child8('jieun', 32); // .name 나온다.
c8.hello;
const p8 = new Parent8('M', 32); // 얘는 .hello 만 나온다.
// p8.
