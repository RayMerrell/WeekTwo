const objPerson = {
    strName : "Ray",
    intAge :"54",
    arrFavSongs:["The Cult - She sells sanctuary","Nektar - Recycled", "Led Zeppelin - Kashmir", "Rush - 2112", "The The - Sweet bird of truth", "Marillion - Assassing", "Jethro Tull - Thick as a brick"],
    funSayHi(){
        console.log(`Hello my name is ${this.strName}`);
    }
};

objPerson.funSayHi();
