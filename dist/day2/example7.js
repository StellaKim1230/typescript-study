"use strict";
// class Types
// 할당시 값을 선언해주거나, 컨스트럭터에서 값을 할당해 주지 않으면 에러가 난다.
class Person1 {
    constructor() {
        this.name = 'jieun';
        this.age = 32;
    }
}
class Person2 {
}
console.log(new Person1());
const p2 = new Person2();
p2.name = '1234';
console.log(p2);
// 접근 제어자
class Person4 {
    constructor() {
        this._name = 'jieun';
        // public setName(name: string) {
        //   this._name = name;
        // }
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Person41 {
    constructor() {
        this.name = 'jieun';
    }
}
const p4 = new Person4();
console.log(p4);
p4.name = 'Mark';
// p4.setName('mark')
console.log(p4.name);
const p41 = new Person41();
// p41.name = 'test'
