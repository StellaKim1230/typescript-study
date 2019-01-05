// interface 끼리는 상속이 가능하다.

interface IPerson6 {
  name: string
}

interface IKorean extends IPerson6 {
  // name을 안 써도 IKORean 은 name을 가지고 있다.
  city: string
}

const p6: IPerson6 = {
  name: 'jieun'
}

const k6: IKorean = {
  name: 'jieun',
  city: 'Suwon'
}


// indexable
// number indexable
// interface StringArray {
//   [index: number]: string
// }

// const sa: StringArray = {}
// sa[100] = '백'

// // string indexable
// interface Stringdict{
//   [index: string]: string
// }

// const sd: Stringdict = {}
// sd['handred'] = '백'
// sd.test = 'test'

// interface Optional {
//   [index: string]: string
// //    name: number
//   name: string
// }