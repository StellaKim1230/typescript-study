"use strict";
const p21 = {
    name: 'jieun'
};
const p22 = {
    name: 'jieun',
    age: 32
};
function hello2(person) {
    if (person.age === undefined) {
        return;
    }
    console.log(`${person.name}, ${person.age.toString()}`);
}
