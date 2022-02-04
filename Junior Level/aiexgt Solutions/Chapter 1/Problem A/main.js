'use strict'

const calculatePurchase = (money)=>{
    if(money >= 0.6 && money < 1){
        return["Helado de Agua",(money-0.6)];
    }
    else if(money >= 1 && money < 1.6){
        return["Helado de Crema",(money - 1)];
    }
    else if(money >= 1.6 && money < 1.7){
        return["Helado de Heladix",(money - 1.6)];
    }
    else if(money >= 1.7 && money < 1.8){
        return["Helado de Heladovich",(money - 1.7)];
    }
    else if(money >= 1.8 && money < 2.9){
        return["Helado de Helardo",(money - 1.8)];
    }
    else if(money >= 2.9){
        return["Helado con Confites o un Pote de 1/4kg",(money - 2.9)];
    }
    else{
        return["ningun helado",(money-0)];
    }
}

const printOutput = (name,purchase,change)=>{
    return (`${name} puede comprar ${purchase} y su cambio es Q.${change} <br><hr>`);
}

let name = document.querySelector("#name");
let money = document.querySelector("#money");
let button = document.querySelector("#enviar");
let divOutput = document.querySelector("#result");

button.addEventListener('click',function(){
    event.preventDefault();
    let purchase = calculatePurchase(money.value);
    let result = printOutput(name.value,purchase[0],purchase[1].toFixed(2));
    let div = document.createElement("P");
    div.innerHTML = result;
    divOutput.appendChild(div);
})