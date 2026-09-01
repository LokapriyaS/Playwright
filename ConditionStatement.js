function LaunchBrowser(string){
        if(string=="chrome"){
        console.log("Chrome browser is launched");
    }
    else{
        console.log("Other browser launched");
    }

}
LaunchBrowser("chrome");

function runTests(string){
    switch(string){
        case "Smoke":
            console.log("smoke test case is running");
            break;
        case "sanity":
            console.log("sanity test case is running")
            break;
        case "Regression":
            console.log("Regression test case is running");
            break;
            default:
            console.log("Invalid test case");
    }
}
runTests("Regression");