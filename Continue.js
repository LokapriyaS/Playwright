//Continue is used to skip the current iteration of a loop and move on to the next iteration.
//  It allows you to bypass certain code within the loop based on a specified condition.
//Difference between break and continue is that break exits the loop entirely, 
// while continue skips the current iteration and proceeds to the next one.

function continueExample() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Skip the iteration when i is equal to 5
        }
        console.log("Iteration:", i);
    }
    console.log("Loop completed.");
}
continueExample();