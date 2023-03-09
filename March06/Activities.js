
// // Activity One
console.log("Activity One\n");
let intAge = Math.round(10 + Math.random()* 20); //random number between 10 and 30
let intCountry =  Math.ceil(Math.random()* 4);
let strCountry = "";
console.log("Age = " + intAge);

switch (intCountry){
    case 1:
        strCountry = "UK";
        break;
    case 2:
        strCountry = "France";
        break;
    case 3:
        strCountry = "Germany";
        break;
    case 4:
        strCountry = "Italia";
        break;
}
console.log("Country = " + strCountry);

if (intAge > 17 && strCountry === "UK"){
    console.log("Get them in");
}

// console.log("\n");

// // Activity two
 
// console.log("Activity two\n");
// const arrToppings = ["Pepperoni", "Mozzarella", "Mushroom", "Bacon", "Sausage", "Pineapple", "Chilli", "Bell Peppers"];
// let intTopping = Math.floor(Math.random()*8); //rando between 0 and 7
// let strTopping = arrToppings[intTopping];

// let strPositive =`These are important ingredients for my pizza.
//     I don't mind having ${strTopping.toLowerCase()} on my pizza`;
// let strNegative = `${strTopping} should not be on a pizza.`;
// let strMeh = `${strTopping} is so last year`;
// let strMessage = "";

// switch (strTopping){
//     case "Pepperoni":
//     case "Mozzarella":
//     case "Bell Peppers":
//         strMessage = strPositive;
//         break;
//     case "Pineapple":
//     case "Sausage":
//         strMessage = strNegative;
//         break;
//     default:
//         strMessage = strMeh;
// }
// console.log (strMessage);

// console.log("\n");

// // Activity three
// console.log("Activity Three\n");

// let arrWords = ["ABBA", "Broom", "Cabbie", "Dabbled", "Ebonized", "Faceplate","Gadgeteers","Habituation", "Illegibility"];
// let intRandom = Math.floor(Math.random()*9);//rando between 0 and 8
// let strPassword = arrWords[intRandom];

// if(strPassword.length < 8){
//     console.log(`The password "${strPassword}" is too short`);
// }else{
//     console.log (`${strPassword}`);
// }

// console.log("\n");
// //Activity Four
// console.log("Activity Four");

// let intNum = Math.round(Math.random()*100000);//random big number

// if (intNum % 3 === 0 || intNum % 5 === 0){
//     console.log(`${intNum} is divisible by 3 or 5`);
// }else{
//     console.log (intNum);
// }

// console.log("\n");
// //Activity Five
// console.log("Activity Five");

// let intNum5 = Math.round(Math.random()*100000);//random big number
// let strMessage5="";

// if (intNum5 % 3 === 0){
//     strMessage5 = "fizz";
// }
// if (intNum5 % 5 === 0){
//     if (strMessage5.length > 0 ){strMessage5 += " "};
//     strMessage5 += "buzz";
// }
// if (strMessage5.length === 0 ){
//     strMessage5 = intNum5;
// }
// console.log(strMessage5);

// console.log("\n");

// //Activity Six
// console.log("Activity Six");

// let intNum6 = Math.round(Math.random()*1000);//random number
// intNum6 = 2020220202; // comment out when done checking
// let strToCheck = intNum6.toString(); //not really needed as all variables are objects in js
// let intFront = 0;
// let intBack = strToCheck.length-1;
// let intCount = 0;
// let booPalindrome = true;

// for (intCount = 0; intCount < (Math.ceil(strToCheck.length-1)/2) && booPalindrome === true; intCount++ ){  
//     if (strToCheck[intFront] !== strToCheck[intBack]){
//             booPalindrome = false;
//     }else{
//         intFront++; intBack--;
//     }
// }
// if (booPalindrome === true){
//     console.log (`${intNum6} is a palindrome!!!!`);  
// }else{
//     console.log (`${intNum6} is not a palindrome!!!`); 
// }

// console.log("\n");

// //Activity Seven
// console.log("Activity Seven");

// let intTime = Math.round(Math.random()*25);//random number between 0 and 24
// let strLocation = "";
// let strPlaceOfWork = "Warrington";
// let strHomeTown = "Padgate";

// if (intTime < 8 || intTime > 18){
//     strLocation = "in " + strHomeTown;
// }else if(intTime === 8 || intTime === 18){
//     strLocation = "Commuting";
// }else {
//     strLocation = "in " + strPlaceOfWork;
// }
// console.log(`The time is ${intTime}:00 hours
//     So i will be ${strLocation}`)

// console.log("\n");

// //Activity Eight
// console.log("Activity Eight");

// strToCheck = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let arrVowels =["a","e","i", "o", "u"];
// let intVowels = 0;
// let intLastVowel = 0;

// for (intCount = 0; intCount < strToCheck.length-1;intCount++){
//     for (intVowels = 0; intVowels < 5; intVowels++){
//         if (strToCheck[intCount] === arrVowels[intVowels] ){
//             intLastVowel = intCount;
//             break;
//         }
//     }
// }
// console.log(`The last vowel is at position ${intLastVowel}`);

// console.log("\n");

// //Activity Nine
// console.log("Activity Nine");

// let strWord = "starlings";
// //let strWord = "starling"; //comment out to test;
// let booCheck = false;

// if (strWord[0] === strWord[strWord.length-1]){
//     booCheck = true;
// }
// console.log(booCheck);

// console.log("\n");

// //Activity Ten
// console.log("Activity Ten");

// let intNum1 = Math.round(Math.random()*1000);//random number
// let intNum2 = Math.round(Math.random()*1000);//random number
// let intSum = intNum1 + intNum2;
// if ( intSum % 2 === 0){
//     console.log(`Sum= ${intSum}`);
// }else{
//     console.log(`Product = ${intNum1 * intNum2}`);
// } 