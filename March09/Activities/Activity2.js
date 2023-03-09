let intOrderCount = 0;

const funTakeOrder = (strTopping1, strTopping2) =>{
    console.log(`Pizza with ${strTopping1} and ${strTopping2}`);
    intOrderCount++;
}

let strResult = funTakeOrder("Pepperoni", "Mushroom");
console.log(`Order number ${intOrderCount} `);