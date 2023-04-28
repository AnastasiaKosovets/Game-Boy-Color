function onScreenNintendo(){
    let screen = document.getElementById("idScreen");
    screen.classList.add("screenOn");
    
 }


 function prueba() {
    let ledPower = document.getElementById("switchOn");
    ledPower.classList.add("ledPowerOn");
 }

function startAll() {
    onScreenNintendo();
    prueba();
}