'use strict'

//Problema A

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad >= 18){
        if(time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis porque sos la primera persona que entro a las 2 AM");
            free = true;
        }else{
            alert(`Son las ${time}:00Hs y podes pasar pero hay que pagar`)
        }
    }else{
        alert("Sos menor de edad y no vas a pasar");
    }
}

/*
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/