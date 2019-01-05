"use strict";
// generic class
class Person20 {
    constructor(name, age) {
    }
}
const p20 = new Person20('jieun', 32);
const person21 = {
    name: 'jieun',
    age: 32
};
function getProperty(person, key) {
    return person[key];
}
console.log(getProperty(person21, 'name'));
function setProperty(person, key, value) {
    person[key] = value;
}
console.log(setProperty(person21, 'age', 34));
