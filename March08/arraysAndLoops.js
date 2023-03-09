// const arrCoffeeOrder = [
//     "Alex - White Coffee",
//     "Ben - Black Coffee",
//     "Charlie - White with sugar"
// ];

// console.log(arrCoffeeOrder);



// const arrCoffeeOrder2 = [
//     "Alex - White Coffee",
//     "Ben - Black Coffee",
//     "Charlie - White with sugar"
// ];

// arrCoffeeOrder2[1] = "Ann - Tea wth milk";

// console.log(arrCoffeeOrder2);
// console.log(arrCoffeeOrder2.length);

// const arrCoffeeOrder4 = [
//     "Alex - White Coffee",
//     "Ben - Black Coffee",
//     "Charlie - White with sugar"
// ];

// arrCoffeeOrder4.push ("Donna - Espresso");
// console.log(arrCoffeeOrder4);


// const arrCoffeeOrder5 = [
//     "Alex - White Coffee",
//     "Ben - Black Coffee",
//     "Charlie - White with sugar"
// ];

// arrCoffeeOrder5.pop();
// console.log(arrCoffeeOrder5);


// console.lo
// const arrCoffeeOrder6 = [
//     "Alex - White Coffee",
//     "Ben - Black Coffee",
//     "Charlie - White with sugar"
// ];

// arrCoffeeOrder6.splice(1,1);
// console.log(arrCoffeeOrder6);



// const arrFavSongs = [
//     "Nektar - Recycled",
//     "Rush - YYZ",
//     "Led Zeppelin - Kashmire"
// ]
// console.log(arrFavSongs);

// arrFavSongs.push("The The - Infected");
// arrFavSongs.push ("Red Hot Chilli Peppers - Californication");
// console.log(arrFavSongs);

// arrFavSongs.pop();
// console.log(arrFavSongs);

// console.log("\n\n");
// const arrFavSongs2 = [
//     "Nektar - Recycled",
//     "Rush - YYZ",
//     "Led Zeppelin - Kashmire",
//     "The The - Infected",
//     "Red Hot Chilli Peppers - Californication"
// ]

// console.log(`Original array ${arrFavSongs2}`);

// let strIffySong = arrFavSongs2.shift();

// console.log (`Removing the first item using shift gives us ${strIffySong}`);
// console.log (`Which leaves our array is rearranged to accomadate the missing item (shifted down one) ${arrFavSongs2}`);
// console.log("\n");
// console.log (`If we change our mind, we can add it back at the beginning and automatically shift all the other values up one to accomodate using the unshift() method`);
// arrFavSongs2.unshift(strIffySong);
// console.log(`Which makes our array ${arrFavSongs2}`);



// const arrFavDrinks = ["Tea", "Cider", "Home made wine"];
// console.log(arrFavDrinks[0]);
// console.log(arrFavDrinks[1]);
// console.log(arrFavDrinks[2]);

// for(let x = 0; x < arrFavDrinks.length; x++){
//     console.log (arrFavDrinks[x]);
// }


console.log("\n\n");

// const arrMultiplesTwo = [];
// for (let x = 0; x < 20 ; x++){
//     if (x%2===0){
//         arrMultiplesTwo.push(x);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 19 are :${arrMultiplesTwo}`);


// console.log("\n\n");

// let intAge = 15;

// while(intAge < 18){
//     console.log(`You're a child`);
//     intAge++;
// }

// console.log(`You are now an adult and it is your round`);

// const arrCards = ["Hearts", "Clubs", "Diamonds", "Spades"];
 
// let strCurrentCard = "Clubs";

// while (strCurrentCard!= "Spades"){
//     console.log(strCurrentCard);
//     strCurrentCard = arrCards[Math.floor(Math.random() *4)];
// }

// console.log(strCurrentCard);


//example of extra conditions in a loop
// const arrMultiplesTwo = [];
// let booStayInLoop = true;
// let intFoundCount = 0;

// for (let x = 1; x <= 20 && booStayInLoop === true; x++){
//     if (x%2===0){
//         arrMultiplesTwo.push(x);
//         intFoundCount++;
//         if (intFoundCount === 5){
//             booStayInLoop = false;
//         }
//     }
// }

// console.log(`The first five numbers divisible by 2 between 1 and 20 are :${arrMultiplesTwo}`);

// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// console.log(arr);