//Check number is greater , les or equal to zero

function checkNumber(number){
    let inputNumber=number;
    if(inputNumber<0){
        console.log("Number is less than zero");
    }
    else if(inputNumber>0){
        console.log("Number is greater than zero");
    }
    else{
        console.log("Number is equal to zero");
    }

    }
    checkNumber(5);
