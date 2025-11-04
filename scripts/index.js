//By Your_Sensei2007 (Telegram/Instagram)
const display = document.getElementById('display');

console.log("hello");
function addToDisplay(args){
    display.value += args;
}

function clearAll(){
    display.value = "";
}

function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        setTimeout( () =>
        {
            display.value = "";
        }, 1500)
    }
}
