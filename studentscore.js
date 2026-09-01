function CalculateGrade(score){
    let grade;
    switch(true){
        case (score>=90):
            grade = "A";
            break;
        case (score>80 && score<=90):
            grade = "B";
            break;
        case (score>70 && score<=80):
            grade = "C";
            break;

            //range of score is 61-70
        case (score>60 && score<=70):
            grade = "D" ;
            break;
        case (score>50 && score<=60):
            grade = "E";
            break;
            default:
            grade = "Fail";

    }
    console.log(grade);
}
CalculateGrade(75);

