let numPIN = 1234;
let numBalance = 3000;

function funWithdrawl (PIN, Amount){
    if (!(numPIN === PIN) ){
        console.log (`Credentials incorrect`);
        return(-1);
    }
    if (!(numBalance >= Amount)){
        console.log(`Insufficient funds to withdraw ${Amount}`);
        return(-2);
    }
console.log(`Dispensing ${Amount} cash to you.`)
numBalance -= Amount;
return(true);
}

let intResult = funWithdrawl (1234, 850);                              //Adjust here to test
if (intResult <0) {
    console.log("Transaction unsuccsessful");
}else{
    console.log (`You have ${numBalance} remaining`);
}