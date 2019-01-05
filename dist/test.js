"use strict";
// // nolmplicitAny
// const obj: {[index: string]: any} = {
//   foo: 3
// }
// obj['bar'] = 4
// // noImplicitThis
// function click(this: {a: number}) {
//   this.a = 5
// }
// // strictNullChecks
// const a: string = null
// const b: string = undefined
// function test(a: string | null) {
//   if ( a === null ) return -1
//   return a.indexOf('a')
// }
// test(null)
// test('a')
// // strictFunctionTypes
// const button = document.querySelector('#btn') as HTMLButtonElement
// button.addEventListener('dragend', (e: MouseEvent) => {})
// // strictPropertyInitialization
// class Test {
//   name: string;
//   // name: string = 'Mark';
//   // constructor() {
//   //   this.name = 'Mark'
//   // }
//   constructor() {}
//   async init() {
//     this.name = 'Mark'
//   }
// }
// // const tes1t = new Test();
// // test.init();
// new Test();  // constructor 을 부른다.
// // constructor가 없으면 부를때 할당되는 값이 없으니 모르겠다고 알려준다.
// // constructor에서 할당 안 해줄떄 있다 이유는 async가 안된다.
// // strictBindCallApply 3.2버전부터 타입 체크 된다.
// function bindTest(a: string, b:number) {
// }
// const obj1 = {}
// bindTest.apply(obj, [5, 5])
