"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = 'mark';
const myAge = 32;
// tuple types
let tu = ['hello', 1];
// any types
function leakingAny(value) {
    let a = value.num;
    let b = a + 1;
    return b; //return 되어서 나오는것도 any
}
leakingAny('hello');
leakingAny(8);
// 인자는 any로 들어가도 리턴값은 any를 막아주자.
function test(a) {
    if (a.b !== undefined) {
        const b = a.b;
        setTimeout(() => {
            console.log(b.c);
        }, 1000);
    }
}
// Type Assertions & non-null assertions
const dom = document.querySelector('#id');
// non-null assertions
function optional(b) {
    console.log(b.foo.length);
} // ! 붙여주면 null, undefined를 제낀다.
