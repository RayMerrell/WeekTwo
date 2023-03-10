const objPet={
    strName:"Penny",
    strTypeOfPet:"Pooch",
    intAge:5,
    strColour:"Golden",
    funEat(){
        console.log(`${this.strName}, the ${this.strColour} ${this.strTypeOfPet}, is now eating.`);
        return 1;
    },
    funDrink(){
        console.log(`${this.strName}, the ${this.strColour} ${this.strTypeOfPet}, is now drinking.`);
        return 1;
    }
}
objPet.funEat();
objPet.funDrink();