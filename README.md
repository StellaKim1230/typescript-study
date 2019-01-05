# Typescript notion 문서
https://www.notion.so/TypeScript-Basic-727820ac0d4544498ebe732e940816f4
# typescript 문서
 공식 어나운스먼트 : https://blogs.msdn.microsoft.com/typescript/
 typescript 문서 : typescript deep dive 이거 보고 한다.
 
 타입 스크립트 실행 할 수 있는 환경 : Deno (nodejs 만든 사람)
 타입스크립트를 컴파일 언어라고 한다. 

 타입스크립트 -> 컴파일 후 -> 자바스크립트 (자바스크립트가 실행할 수 있는 환경에서 실행 할 수 있게만 만들어 주는것)
 전통적인 컴파일러와는 조금 다르다 ( 기계어로 바꿔주는게 아니어서 )
 컴파일 된 코드는 작은 크기에 최적화되는데 타입스크립트를 자바스크립트로 컴파일 되면 크기가 작아지진 않는다.

# typescript
 1. 자바스크립트 실행 환경
 2. 타입스크립트 컴파일러 설치
 3. 타입스크립트 에디터 ( 컴파일 에러를 실시간으로 에디터에서 보여주기 때문에 에디터 사용 권장)

# tsconfig
* extends
  - 상대경로명 써서가져오면 그 파일을 가져와서 사용한다.
* files, include, exclude
  - 어떤 파일을 컴파일 할건지 안할건지 고른다. 셋다 설정이 없으면 모두 컴파일
  - fields 안에 array로 파일명을 다 써준다. 이 파일을 직접 골라서 컴파일 하겠다.
* exclude, include
  - gitignore처럼 사용하면 된다.
* typeRoots
  - node_modules/types 말고 직접 만들어준 곳에서 찾아와서 사용한다.
  - type들이 있는 루트 폴더 명
  -  @types : 모든 타입이 다 있진 않아서 타입이 필요한 경우 따로 만들어서 써야 한다. 
  - @types 폴더를 따로 만들어서 안에 name이라는 폴더가 있으면 import * as name from 'name' 이렇게 하면 그 안에 name이 같은 경우 다 호출해서 사용 가능하다. (typeRoots)로 설정한다.
* types
  - ./node_modules/@types/안의 모듈 이름에서 찾아온다.
  - types, typeRoots를 혼용해서 사용하지 않는다.
* target
  - 빌드의 결과물을 어떤 버전으로 할 것이냐 지정 안하면 es3
* lib
  - 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐.
  - ~~ . 눌렀을떄 타입들이 나와야 하는데 안나오면 lib 의심해보기.
* outDir (대부분 이거 사용)
	- 폴더 구조대로 다 넣어주기.
* outFile
	- 하나의 파일로 떨어진다.
* strict
	- 가급적 켜고 사용하자.
	- nolmplicitAny (적폐)
		- 가급적이면 any 적폐
		- 켜게 되면 명시적으로 any라고 하지 않았는데 타입스크립트가 추론을 실패한 경우, any가 맞으면 any라고 지정하라.
	- suppressLmplicitAnyIndexErros
		- noImplicitAny 사용할때 인덱스 객체에 인덱스 시그니쳐가 없는 경우 오류가 발생하는데 이를 예외처리한다.
	- noImplicitThis
		- this를 정확하게 지정해줘야 한다.
	- strictNullChecks(false로 해 놓으면)
		null, undefined 를 받을 수 있다.
	- strictFunctionTypes
	- strictPropertyInitialization
	- strictBindCallApply

* references
* importHelpers
  - true : helper 함수들만 따로 모듈에서 가져오는 방식으로 바뀐다.

# Basic Types (모두 소문자)
* ECMAScript 표준에 따른 기본 자료형은 6가지(Primitive Types)
	- boolean
	- number
	- string
	- null (typeof null = object)
	- undefined (typeof undefined = undefined)
	- symbol
	- array : object형
* 프로그래밍을 도울 타입
	- Any
	- void
	- Never
	- Enum

	
# Literal Types
``` 
let age: 36 = 36;
age = 37 // Error

let name: 'mark = 'mark';
name = 'Mark' // Error
```

# Tuple Types
- call, bind, apply 에서도 tuple이 적용된다

# Any Types
 - 어떤 타입이어도 상관없는 타입
 - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지가 않는다.
 - any로 사용했을 떄 더이상 누수되지 않게 막는거에 주력하자.

# Never Types
- 끝나지 않는 리턴에 주로 사용된다.
```
type Indexable<T> = T extends string
  ? never
  : T extends number
    ? never
    : T extends boolean
      ? never
      : T extends undefined
        ? never
        : T extends Function ? never : T & { [index: string]: any };
```
        
# Union Types
```
function offset(direction: 'left' | 'right' | 'top' | 'bottom', size: number) {
	// ...
}
```
- 알파벳이 틀릴경오 바로 에러를 뱉는다.

# Type Guards
```
console.log('indexOf' in 'hello'); // error
console.log('toString' in {}); // true
console.log('length' in []); // true
```
- in 오른쪽에는 primitive 타입이 오면 안된다.
- 주의) callback in type guard
	- TypeScript는 타입 가드가 콜백에서 활성 상태를 유지한다고 가정하지 않습니다.
```
function test(a: { b?: {c: string}}) {
    if (a.b !== undefined) {
        setTimeout(() => {
            console.log(a.b.c);
        }, 1000);
    }
}
```

# Type Assertions

```
const dom = document.querySelector('#id') as HTMLButtonElement
```
- id가 있는지 없는지 먼저 체크를 해줘야 한다.

# non-null assertions
```
function optional(b: { foo: string | null }) {
  console.log(b.foo.length);
  console.log(b.foo!.length);
}
```
- 위 코드가 string일 경우는 length를 사용 할 수 없으니 에러를 반환한다.
- ! 붙여주면 null, undefined를 제낀다.

# Type Alias, Interface
- type alias 쓰고 에러가 나오면 type alias 쓰기 전에 애들이 문제가 있고 interface는 interface의 잘못이 있으면 해당 interface에서의 잘못인거다.
- 이미 있는거의 조합을 하고 싶으면 type alias
- interface 는 새로운 무언가를 만들어서 그 안에서 작업해서 사용하는것

	