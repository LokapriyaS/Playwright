//var hoisting will throw an error because it is not defined yet
console.log(hoisting);
var hoisting = "I am hoisted!";

//let hoisting will throw an ReferenceError: because it is not defined yet
console.log(hoistingLet);
let hoistingLet = "I am hoisted!";

//const hoisting will throw an ReferenceError: because it is not defined yet
console.log(hoistingConst);
const hoistingConst = "I am hoisted!";

//Function hoisting will not throw an error because it is defined before calling the function
hoistedFunction();
function hoistedFunction() {
    console.log("I am hoisted!");
}
