const arrBobsFollowers  = ["Tommy", "Anne", "Mickey", "Joules", "Sarah", "Theresa", "Ray"];
const arrHannahsFollowers = ["Jane", "Sarah", "Chris", "Mark", "Dianne", "Fred", "Mickey"];


for (let c= 0; c < arrBobsFollowers.length; c++){
    for (let x = 0; x < arrHannahsFollowers.length; x++){
        if (arrBobsFollowers[c] === arrHannahsFollowers[x]){
            console.log (arrBobsFollowers[c] + " follows Hannah and Bob.");
        }
    }
}