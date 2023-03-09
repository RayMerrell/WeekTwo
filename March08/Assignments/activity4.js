//const arrMoovies = ["Dead Man's Shoes", "Snatch", "Lock Stock", "The Grand Budapest Hotel", "O Brother, where art thou?"]; //false check

const arrMoovies = ["Dead Man's Shoes", "Snatch", "Ghostbusters", "Lock Stock", "The Grand Budapest Hotel", "O Brother, where art thou?"]; //true check

arrMoovies.push("The longest day", "Saving Private Ryan");

let intCount = 0;

for (let x = 0; x < arrMoovies.length; x++){
    console.log(arrMoovies[x]);
}
console.log("\n");
if (arrMoovies[2] === "Ghostbusters"){
    console.log("Yay it's Ghostbusters");
}else{
    console.log(`We want Ghostbusters`);
}