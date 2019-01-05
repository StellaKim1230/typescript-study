"use strict";
// generic : 타입을 하나의 변수처럼 취급
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
function helloAny(message) {
    return message;
}
helloAny('name');
helloString('name');
helloNumber(32);
function helloGeneric(message) {
    return message;
}
helloGeneric('mark'); // mark 라는 스트링 리터럴 타입으로 리턴
helloGeneric(32); // <T> 를 안 쓰면 message: T의 T로부터 추론해서 타입을 <T>에 넣겠다.
helloGeneric('mark');
helloGeneric(32);
// generic array, tuple
function helloArray(message) {
    return message[0];
}
console.log(helloArray(['hello', 'world']));
console.log(helloArray(['hello', 5]));
function helloTuple(message) {
    return message[0];
}
console.log(helloTuple(['hello', 'world']));
console.log(helloTuple(['hello', 5]).indexOf(''));
// console.log(helloTuple([1, 2, 3]))
