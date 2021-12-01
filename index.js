
import Money from './models/Money.js';

const playerMoney = new Money();

function addKnut(){
    playerMoney.addOrRemoveKnuts(1);
    updateMoneyDisplay();
}

function updateMoneyDisplay(){
    const htmlKnuts = document.getElementById("knutsDisplay");
    htmlKnuts.innerText = "Knuts = " + playerMoney.getKnuts(); 
    const htmlSickles = document.getElementById("sicklesDisplay");
    htmlSickles.innerText = "Sickles: " + playerMoney.getSickles();
    const htmlGalleons = document.getElementById("galleonsDisplay");
    htmlGalleons.innerText = "Galleons: " + playerMoney.getGalleons(); 
}

function bindButton(){
    const button = document.getElementById("sendNifflersButton");
    button.addEventListener("click", addKnut);
}

bindButton();

