const objCoffeeShop={
    strBranch:"Latchford",
    arrDrinks:[
        {"drink":"Tea", "price" : 1.12},
        {"drink":"Coffee", "price": 1.27},
        {"drink":"Juice", "price": 0.53},
        {"drink":"Milk", "price": 0.75}
    ],
    arrFood:[
        {"food":"CheeseBurger", "price": 3.55},
        {"food":"Burger", "price": 3.25},
        {"food":"Chips", "price": 2.51},
        {"food":"Steak Pie", "price": 3.53},
    ],
    arrFoodOrder:[],
    arrDrinksOrder:[],
    numOrderTotal:0, //this will NOT initialise to a number i can use in statements without getting a NaN error
    strOrderFeedBack:"Your order ",

    funFoodOrdered(){
        this.numOrderTotal = 0; //to get around the NaN none-initialisation problem
        this.strOrderFeedBack = "Your food order of ";
        for (let x = 0; x < this.arrFoodOrder.length;x++){
            for (let c = 0; c < this.arrFood.length;c++){
                if (this.arrFoodOrder[x] === this.arrFood[c].food){
                    this.strOrderFeedBack += this.arrFood[c].food + ": £" + this.arrFood[c].price + ", ";
                    this.numOrderTotal += this.arrFood[c].price;
                }
            }
        }
        console.log(this.strOrderFeedBack +  "comes to: " + this.numOrderTotal);
    },
    funDrinksOrdered(){
        this.numOrderTotal = 0; //to get around the NaN none-initialisation problem
        this.strOrderFeedBack = "Your drinks order of ";
        for (let x = 0; x < this.arrDrinksOrder.length;x++){
            for (let c = 0; c < this.arrDrinks.length;c++){
                if (this.arrDrinksOrder[x] === this.arrDrinks[c].drink){
                    this.strOrderFeedBack += this.arrDrinks[c].drink + ": £" + this.arrDrinks[c].price + ", ";
                    this.numOrderTotal += this.arrDrinks[c].price;
                }
            }
        }
        console.log(this.strOrderFeedBack +  "comes to: " + this.numOrderTotal);
    }
}

let numOrderTotal = 0;
objCoffeeShop.arrDrinksOrder = ["Tea", "Tea", "Milk"];
objCoffeeShop.arrFoodOrder = ["CheeseBurger", "Steak Pie", "Chips"];
objCoffeeShop.funDrinksOrdered();
numOrderTotal = objCoffeeShop.numOrderTotal;
objCoffeeShop.funFoodOrdered();
numOrderTotal += objCoffeeShop.numOrderTotal;
console.log("The total price is " + numOrderTotal + "\nEnjoy your meal");