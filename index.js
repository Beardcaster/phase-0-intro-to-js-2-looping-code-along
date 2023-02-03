
function writeCards(names, event){
    const newArray = [];
    for(let i =0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    } 
   
   return newArray;
};


function countDown(count){

    while (count >= 0) {
        console.log(count);
        count = count - 1;
    }

}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
countDown(10);
