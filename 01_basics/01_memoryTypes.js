// 2 memory types in JavaScript 
// STACK - primitive DataType
// HEAP  - Non - primitive DataType

//example for primitive datatype
let userName01 = "sam"
let newUserName01 = userName01 
newUserName01 = "jones"
console.log(userName01);
console.log(newUserName01);


//example for non primitive datatype
let userOne = {
    email: "jonjones@ufc.in",
    upi: "123@upi"
}

let userTwo = userOne
userTwo.email ="conormcg@ufc.in"

console.log(userOne.email);
console.log(userTwo.email);