"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: "John", age: 25 }, { name: "Jane", age: 30 });
console.log(age);
