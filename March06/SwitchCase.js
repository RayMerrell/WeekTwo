var strCarType;
var intRandom;
intRandom = Math.ceil(Math.random() * 10);

switch (intRandom){
    case 1:
        strCarType= "A Crappy One"
        break;
    case 2:
        strCarType= "Another Crappy One"
        break;
    case 3: 
        strCarType= "A new One"
        break;
    case 4:
        strCarType= "A rusty One"
        break;
    case 5:
        strCarType= "A green One"
        break;
    case 6:
        strCarType= "A blue One"
        break;
    case 7:
        strCarType= "A pink One"
        break;
    case 8: 
        strCarType= "A polkadot One"
        break;
    case 9:
        strCarType= "A Orange One"
        break;
    case 10:
        strCarType= "A yellow One"

}
console.log (strCarType);

switch (strCarType){
    case "A Crappy One":
    case "A rusty One":
    case "Another Crappy One":
        console.log("Get a proper car.");
        break;
    case "A new One":
        console.log("New cars are the best.");
        break;
    case "A green One":
    case "A blue One":
    case "A pink One":
    case "A Orange One":
    case "A yellow One":
        console.log("Get a paintjob, plain Jane");
        break;
    case "A polkadot One":
        console.log("Fancy pants");
        break;
    default:
        console.log("Bikes are the best anyway");
}