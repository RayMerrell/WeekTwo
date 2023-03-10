// const objPerson = {
//     strName : "Ray",
//     intAge :"55"
// };

// console.log(objPerson.strName + " is " + objPerson.intAge + " Years old");

// let strOffer = "None";
// let intTime = 1000;

// const objCafe = {
//     strName : "Whitesheep",
//     intSeatingCapacity: 100,
//     booHasSpecialOffers: true,
//     arrDrinks: [
//         "Tea",
//         "Latte",
//         "Filter Coffee",
//         "Hot Chocolate"
//     ],
//     strBreakfastOffer : "Free biscuit with tea",
//     strLunchOffer: " Free drink with suprisingly priced sandwhich",
//     strNoOffer: "Sorry no offers at the moment"
// };

// if (intTime < 1100){
//     strOffer = objCafe.strBreakfastOffer;
// }else if (intTime < 1500){
//     strOffer = objCafe.strLunchOffer;
// }else{
//     strOffer = objCafe.strNoOffer;
// }
// console.log(strOffer);



// const objAlarm = {
//     strWeekendAlarm : "No Alarm Needed",
//     strWeekdayAlarm: "Get up at 7am",
//     strDay : "Friday",
//     strAlarm :"None set"
// };

// if (objAlarm.strDay === "Saturday" || objAlarm.strDay === "Sunday"){
//     objAlarm.strAlarm = objAlarm.strWeekendAlarm;
// }else{
//     objAlarm.strAlarm = objAlarm.strWeekdayAlarm;
// }
// console.log(objAlarm.strAlarm);


// const objPerson = {
//     strName : "Ray",
//     intAge :"54",
//     arrFavSongs:[]
// };

// objPerson.arrFavSongs =["The Cult - She sells sanctuary","Nektar - Recycled", "Led Zeppelin - Kashmir", "Rush - 2112", "The The - Sweet bird of truth", "Marillion - Assassing", "Jethro Tull - Thick as a brick"];
//console.log("Some of " + objPerson.strName + "'s favourite songs are " + objPerson.arrFavSongs);

let strOffer = "None";
let intTime = 1000;

const objCafe = {
    strName : "Whitesheep",
    intSeatingCapacity: 100,
    booHasSpecialOffers: true,
    arrDrinks: [
        "Tea",
        "Latte",
        "Filter Coffee",
        "Hot Chocolate"
    ],
    strBreakfastOffer : "Free biscuit with tea",
    strLunchOffer: " Free drink with suprisingly priced sandwhich",
    strNoOffer: "Sorry no offers at the moment",
    funOpenCafe(){
        if (this.booHasSpecialOffers === true){
            return ("Time for a special offer");
        }
    },
    funCloseCafe(){
        console.log("We are now closed, come back tomorrow");
    }
};
objCafe.funOpenCafe();
objCafe.funCloseCafe();
