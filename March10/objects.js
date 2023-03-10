// const objPerson = {
//     _strName : "Ray",
//     _intAge :"55"
// };

// console.log(objPerson._strName + " is " + objPerson._intAge + " Years old");

// let strOffer = "None";
// let intTime = 1000;

// const objCafe = {
//     _strName : "Whitesheep",
//     _intSeatingCapacity: 100,
//     _booHasSpecialOffers: true,
//     _arrDrinks: [
//         "Tea",
//         "Latte",
//         "Filter Coffee",
//         "Hot Chocolate"
//     ],
//     _strBreakfastOffer : "Free biscuit with tea",
//     _strLunchOffer: " Free drink with suprisingly priced sandwhich",
//     _strNoOffer: "Sorry no offers at the moment"
// };

// if (intTime < 1100){
//     strOffer = objCafe._strBreakfastOffer;
// }else if (intTime < 1500){
//     strOffer = objCafe._strLunchOffer;
// }else{
//     strOffer = objCafe._strNoOffer;
// }
// console.log(strOffer);



// const objAlarm = {
//     _strWeekendAlarm : "No Alarm Needed",
//     _strWeekdayAlarm: "Get up at 7am",
//     _strDay : "Friday",
//     _strAlarm :"None set"
// };

// if (objAlarm._strDay === "Saturday" || objAlarm._strDay === "Sunday"){
//     objAlarm._strAlarm = objAlarm._strWeekendAlarm;
// }else{
//     objAlarm._strAlarm = objAlarm._strWeekdayAlarm;
// }
// console.log(objAlarm._strAlarm);


const objPerson = {
    _strName : "Ray",
    _intAge :"55",
    _arrFavSongs:[]
};

objPerson._arrFavSongs =["Nektar - Recycled", "Led Zeppelin - Kashmir", "Rush - 2112", "The The - Sweet bird of truth", "Marillion - Lavender"];

console.log(objPerson._strName + "'s favourite songs are " + objPerson._arrFavSongs);