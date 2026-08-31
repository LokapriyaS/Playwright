function learnSwitchCase(){
    var inputNumber="less";
    switch(true){
        case(inputNumber<5):
            console.log("Input number is less than 5");
            break;
        case(inputNumber>5):
            console.log("Input number is greater than 5");
            break;
            console.log("Input number is not less than 5");
        case(inputNumber===5):
            console.log("Input Number is equal to 5");
            break;
        default:
            console.log("Input number is invalid");


    }


}
learnSwitchCase();