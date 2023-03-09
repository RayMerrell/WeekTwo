const arrMoovies = ["Dead Man's Shoes", "Snatch", "Lock Stock", "The Grand Budapest Hotel", "O Brother, where art thou?"];

arrMoovies.push("The longest day", "Saving Private Ryan");

let intCount = 0;

while (arrMoovies[intCount] != undefined){
    console.log(arrMoovies[intCount]);
    intCount++; //forgetting this will cause endless loop 
}
