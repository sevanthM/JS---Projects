// -------------------------------2 types of dataTypes------------------------------------- 
// - call by value PRIMITIVE DT 
// for PRIMITIVE : 7 values 
// String , Number , Boolean , null , undefined , Symbol , bigInt 

// - call by reference / reference DT - NON PRIMITIVE DT 3 values  
//  NON PRIMITIVE : 3 values
// arrays , funtions and objects 

//primitive DT
let newAge = 41
let newName = "samsmith"
let isSheComing = true
let temp = null 
let universe = undefined 


// // reference DT - creation of object in JavaScript 
let newObj = {
        name: "jones",
        age : 42 ,
        isHeComing : false ,
}
console.log(newObj);




// // reference DT - creation of Arrays in JavaScript 
const heros = ["spideerman" , "superman", "batman"]
console.log(heros);




// // reference DT - creation of Functions in JavaScript 
const myFunction = Function()
{
    console.log("hello earth!");
}