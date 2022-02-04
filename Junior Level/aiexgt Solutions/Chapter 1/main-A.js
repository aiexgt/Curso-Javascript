'use strict'

const calculatePurchase = (money)=>{
    let purchase;
    let change;
    if(money >= 0.6 && money < 1){
        purchase = "Helado de Agua";
        change = money-0.6;
        return[purchase,change];
    }
    else if(money >= 1 && money < 1.6){
        purchase = "Helado de Crema";
        change = money - 1;
        return[purchase,change];
    }
    else if(money >= 1.6 && money < 1.7){
        purchase = "Helado de Heladix";
        change = money - 1.6;
        return[purchase,change];
    }
    else if(money >= 1.7 && money < 1.8){
        purchase = "Helado de Heladovich";
        change = money - 1.7;
        return[purchase,change];
    }
    else if(money >= 1.8 && money < 2.9){
        purchase = "Helado de Helardo";
        change = money - 1.8;
        return[purchase,change];
    }
    else if(money >= 2.9){
        purchase = "Helado con Confites o un Pote de 1/4kg";
        change = money - 2.9;
        return[purchase,change];
    }
    else{
        purchase = "No te alcanza para nada";
        change = money;
        return[purchase,change];
    }
}

const printOutput = (name,purchase,change)=>{
    return (`${name} puede comprar ${purchase} y su cambio es Q.${change} <br>`);
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