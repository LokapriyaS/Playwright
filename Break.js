//Break is used to exit a loop prematurely when a certain condition is met.
//  It allows you to terminate the loop and continue with the next statement after the loop.
function breakExample() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break; // Exit the loop when i is equal to 5
        }
        console.log("Iteration:", i);
    }
    console.log("Loop exited.");
}
breakExample();