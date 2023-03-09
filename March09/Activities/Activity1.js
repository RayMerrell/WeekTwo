const funFactorial = (n) =>{
    if ((n===0) || (n===1)){
        return 1;
    }else{
        return (n * funFactorial(n-1));
    }
}
console.log(funFactorial(4));
