const lines = ["   |   |   ", "___________"];
for (v=1; v<12;v++){
    if (v%4!==0){
        console.log(lines[0]);
    }else{
        console.log(lines[1]);
    }

}