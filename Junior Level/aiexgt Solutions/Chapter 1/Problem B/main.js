'use strict'

const purchaseTicket = (money,ticket)=>{
    if(money >= ticket && money < (ticket*2)){
        return("Compra 1 boleto y te sobra Q." + ((money-ticket).toFixed(2)));
    }
    else if(money >= (ticket*2) && money < (ticket*3)){
        return("Compra 2 boletos y te sobra Q." + ((money-(ticket*2)).toFixed(2)));
    }
    else if(money >= (ticket*3)){
        return("Compra 3 boletos y regalas Q." + ((money-(ticket*3)).toFixed(2)));
    }
    else{
        return("No alcanza para nada");
    }
}

let money = document.querySelector("#money");
let ticket = document.querySelector("#ticket");
let button = document.querySelector("#enviar");
let divOutput = document.querySelector("#result");

button.addEventListener('click',function(){
    event.preventDefault();
    let result = purchaseTicket(((money.value)),(ticket.value));
    let div = document.createElement("P");
    div.innerHTML = result + `<br><hr>`;
    divOutput.appendChild(div);
});