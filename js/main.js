function onScreenNintendo(){
    let screen = document.getElementById("idScreen");
    screen.classList.add("screenOn");
 }

 function ledOnSwitch() {
    let ledPower = document.getElementById("switchOn");
    ledPower.classList.add("ledPowerOn");
 }

 function selectAll() {
    let screen = document.getElementById("idScreen");
    screen.classList.add("selectOn");
} 

function startAll() {
    onScreenNintendo();
    ledOnSwitch();
}