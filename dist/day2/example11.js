"use strict";
// class, static
// static 이 있으면 class명. 으로 바로 호출 가능
Object.defineProperty(exports, "__esModule", { value: true });
class Person11 {
    static abs() {
    }
    hello() {
        Person11.PI;
    }
}
Person11.PI = 3.14;
const PI = 3.14;
function abs() { }
class Person111 {
    hello() {
        PI;
        abs();
    }
}
exports.Person111 = Person111;
// private static 함수는 어디사 사용될까?
// 
