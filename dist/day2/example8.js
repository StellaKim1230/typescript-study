"use strict";
class Parent5 {
    constructor() { }
}
class Child5 extends Parent5 {
    // hello() {
    //   this.protectedProp = 'protected' // 상속에서만 접근 가능하고 그 밖에서는 접근 불가능
    // }
    constructor() {
        super();
        this.protectedProp = '';
    }
    hello() {
        this.protectedProp = 'protected';
    }
}
