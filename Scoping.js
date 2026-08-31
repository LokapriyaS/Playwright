// var scoping = "global scope";
//It is fuctional scope
function checkscope(){
    var scoping="local scope";
    if (true){
        var scoping = 10;
    }
    console.log(scoping);
}
checkscope();

//let scoping=block scopped
function checkBlockScope(){
    let scoping="local scope";
    if (true){
        let scoping = 10;
    }
    console.log(scoping);
}
checkBlockScope();

//const scoping=block scopped
function checkConstScope(){
    const scoping="local scope";
    if (true){
        const scoping = 10;
    }       
    console.log(scoping);
}
checkConstScope();

//let globalScope="global scope";
function checkGlobalScope(){
    let globalScope="local scope";
    if (true){
        let globalScope = 10;
    }
    console.log(globalScope);
}
checkGlobalScope();
