//vat-let-const global , local scoping and hoisting concept

var browserName = "Chrome";//global scope
function getBrowserName(){
    if(true){
        console.log("Browser name is: "+browserName);
    }
    var browserName="Firefox";//local scope
    console.log("Browser name is:" +browserName);
}
getBrowserName();
// explaning the above code: The variable browserName is declared using var inside the function getBrowserName().
//  This means that it has a local scope within the function. 
// However, when you try to access the variable before its declaration, it will result in undefined due to hoisting.
//  The first console.log statement will output "Browser name is: undefined" because the local variable browserName is hoisted but not yet assigned a value. 
// The second console.log statement will output "Browser name is: Firefox" because the local variable is now assigned the value "Firefox".  