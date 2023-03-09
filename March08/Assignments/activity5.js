let intRando = 0;

for (let x = 1; x <= 6; x++){
    intRando = Math.ceil(Math.random()*30);
    if (intRando % 7  === 0){
        console.log(intRando + " is divisable by seven");
    }else{
        console.log(intRando);
    }
}