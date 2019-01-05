"use strict";
class Parent9 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(this._name, this._age);
    }
}
class Child9 extends Parent9 {
    constructor(name) {
        super(name, 36);
    }
}
new Child9('jieun').hello();
