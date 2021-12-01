
import Money from './models/Money.js';
import Nifflers from './models/Nifflers.js';

const playerMoney = new Money();
const playerNifflers = new Nifflers(); 
let nifflersAttracted = 0;
const nifflersAttractedMultiplier = 1.5; 
const nifflersAttractedInitialCost = 5;
let attractNifflersCost = 5;

function addKnut(){
    playerMoney.addOrRemoveKnuts(playerNifflers.sendNifflers());
    updateMoneyDisplay();
}

function addNiffler(){
    playerNifflers.addNifflers(1);
    updateNifflersDisplay();

}

function attractNifflers(){
    if (playerMoney.getTotalKnuts() > attractNifflersCost){
        playerMoney.addOrRemoveKnuts(-attractNifflersCost);
        updateMoneyDisplay();
        addNiffler();
        nifflersAttracted += 1;
        attractNifflersCost = Math.floor(nifflersAttractedInitialCost * Math.pow(nifflersAttractedMultiplier, nifflersAttracted))
        updateAttractNifflersButton();
    }
    
}


function updateMoneyDisplay(){
    const htmlKnuts = document.getElementById("knutsDisplay");
    htmlKnuts.innerText = "Knuts: " + playerMoney.getKnuts(); 
    const htmlSickles = document.getElementById("sicklesDisplay");
    htmlSickles.innerText = "Sickles: " + playerMoney.getSickles();
    const htmlGalleons = document.getElementById("galleonsDisplay");
    htmlGalleons.innerText = "Galleons: " + playerMoney.getGalleons(); 
}

function updateNifflersDisplay(){
    const htmlNifflers = document.getElementById("nifflersDisplay");
    htmlNifflers.innerText = "Nifflers: " + playerNifflers.getNumberOfNifflers();
}

function updateAttractNifflersButton(){
    const htmlAttractNifflersButton = document.getElementById("attractNifflersButton");
    htmlAttractNifflersButton.innerText = "Attract new nifflers. Cost: " + attractNifflersCost + "K";
}


function bindButton1(){
    const button = document.getElementById("sendNifflersButton");
    button.addEventListener("click", addKnut);
}

function bindButton2(){
    const button = document.getElementById("attractNifflersButton");
    button.addEventListener("click", attractNifflers);
}



bindButton1();
bindButton2();
