//a For loop uses a counter variable to control loop execution

for (let intCounter = 1; intCounter <= 10; intCounter++){
    console.log (intCounter);
} //program execution breaks out of the loop once the counter condition is met


//a while loop does not explicitely use a counter variable and will not necessarily run if the condition is false before the loop is encountered
//A While loop is an 'Entry controlled loop', is not terminated with a semi-colon and has the condition expressed at the beginning

//let booSunny = true;//loop will execute
let booSunny = false;//loop will not execute

while (booSunny === true){
    console.log ("In the loop");
    if (Math.round(Math.random()* 10) % 3 === 0){
        booSunny = false;
    }
}
console.log ("Out of the loop");
console.log("\n");

//a do...while loop will ALWAYS execute at least once
//Using the previous example...


let booSunshine = false;//loop condition pre-set to false

do {
    console.log ("In the loop");
    if (Math.round(Math.random()* 10) % 3 === 0){
        booSunshine = false;
    }
}while (booSunshine === true);

console.log ("Out of the loop");

//A Do...While loop is an 'Exit controlled loop',  is terminated by a semi-colon and has the condition expressed at the end.