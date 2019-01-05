// 싱글톤 패턴

class Person15 {
  private static INSTANCE: Person15
  static createInstance() {
    if ( Person15.INSTANCE === undefined ) {
      return new Person15()
    }
    return Person15.INSTANCE
  }
  private constructor() {}
}

Person15.createInstance()