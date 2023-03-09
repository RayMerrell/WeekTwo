console.log("All around the world"[7].toUpperCase());

let strFavDrink ="tea";
console.log(`My favourite drink is ${strFavDrink}`);


console.log("\n\n");
let strName="Ray";
let intAge = 55;
let strColour = "Purple";

console.log(`My name is ${strName}, I am ${intAge} years old and my favourite colour is ${strColour}.`);

strName = "Tommy";
intAge = 25;
strColour = "Yellow";

console.log(`My name is ${strName}, I am ${intAge} years old and my favourite colour is ${strColour}.`);
console.log("\n\n");


let strBreakfast = "Toast";
let strLunch = "Ham and cheese sandwich";
let strDinner = "Chicken in Szechuan sauce";

console.log(`I had ${strBreakfast} this morning. For lunch, I had ${strLunch} and for dinner, I had ${strDinner}.`);

strBreakfast = "Cornflakes";
strLunch = "Ham and cheese sandwich with crisps";
strDinner = "Pork in Cantonese sweet chilli sauce";

console.log(`Tomorrow, i will eat ${strBreakfast} for breakfast. For lunch, I will have ${strLunch} and for dinner, I will have ${strDinner}.`);



console.log("\n\n");
//let dteBirthday = new Date("1968-06-22");
let dteBirthday = new Date("1968-03-22");
//let dteBirthday = new Date("1968-03-03");

let dteToday = new Date(Date.now());

let intBirthdayMonth = dteBirthday.getMonth();//returns the month of the year
let intTodayMonth = dteToday.getMonth();
let intBirthdayDay =dteBirthday.getDate(); //returns the day of the month
let intTodayDay = dteToday.getDate();

let intHadBirthday = 0;

if (intBirthdayMonth < intTodayMonth){
    intHadBirthday = 1;
}else{
    intHadBirthday = 0;
} 

if (intBirthdayMonth === intTodayMonth && intBirthdayDay < intTodayDay){
    intHadBirthday = 1;
}
dteBirthday.setFullYear(dteToday.getFullYear()+intHadBirthday);


let intMillis = dteBirthday.getTime() - dteToday.getTime();

let intDays = Math.round(intMillis / (1000 * 3600 * 24)); //millis per second * seconds per hour * hours per day
 
console.log(`It is ${intDays} days until your birthday`);

// console.log("\n\n");
// let chSpace1 = "x";
// let chSpace2 = "o";
// let chSpace3 = " ";
// let chSpace4 = "x";
// let chSpace5 = "x";
// let chSpace6 = " ";
// let chSpace7 = "o";
// let chSpace8 = " ";
// let chSpace9 = " ";

// let strBlank = "   |   |   ";
// let strDashes = "-----------";

// for (let x = 1; x <12; x++){
//     switch (x){
//         case 1: 
//             console.log (strBlank);
//             break;
//         case 2: 
//             console.log (` ${chSpace1} | ${chSpace2} | ${chSpace3} `);
//             break;
//         case 3: 
//             console.log (strBlank);
//             break;
//         case 4: 
//             console.log (strDashes);
//             break;
//         case 5: 
//             console.log (strBlank);
//             break;
//         case 6: 
//             console.log (` ${chSpace4} | ${chSpace5} | ${chSpace6} `);
//             break;        
//         case 7: 
//             console.log (strBlank);
//             break;
//         case 8: 
//             console.log (strDashes);
//             break;
//         case 9: 
//             console.log (strBlank);
//             break;
//         case 10:
//             console.log (` ${chSpace7} | ${chSpace8} | ${chSpace9} `);
//             break;
//         case 11: 
//             console.log (strBlank);
//             break;
//     }
// }

//console.log(typeof null);