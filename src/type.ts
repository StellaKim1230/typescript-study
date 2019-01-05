import { listenerCount } from "cluster";

let myName = 'mark'
const myAge = 32

// tuple types
let tu: [string, number] = ['hello', 1]

// any types
function leakingAny(value: any) {
  let a:number = value.num
  let b = a + 1
  return b  //return 되어서 나오는것도 any
}

leakingAny('hello')
leakingAny(8)

// 인자는 any로 들어가도 리턴값은 any를 막아주자.


function test(a: { b?: {c: string}}) {
  if (a.b !== undefined) {
      const b = a.b
      setTimeout(() => {
          console.log(b.c);
      }, 1000);
  }
}

// Type Assertions & non-null assertions
const dom = document.querySelector('#id') as HTMLButtonElement

// non-null assertions
function optional(b: { foo: string | null }) {
  console.log(b.foo!.length);
} // ! 붙여주면 null, undefined를 제낀다.
