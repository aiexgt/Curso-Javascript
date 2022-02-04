'use strict'

let free = false;

const validateClient = (years,time)=>{
    if(years >= 18){
        if(time[0] >= 2 && time[0] < 7 && free == false){
            free = true;
            return("Podes pasar gratis porque eres la primera persona despues de las 2:00 a.m.");
        }else{
            return(`Son las ${time[0]}:${time[1]} y podes pasar pero hay que pagar`);
        }
    }else{
        return("No puede pasar, menor de edad");
    }
}

let button = document.querySelector("#enviar");

button.addEventListener('click',function(){
    event.preventDefault();
    let years = document.querySelector("#years");
    let time = document.querySelector("#time");
    let timeArray = time.value.split(":");
    let result = validateClient(years.value,timeArray);
    alert(result);
});