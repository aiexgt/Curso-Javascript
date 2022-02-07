'use strict'

//Problema A
const definirCompra = n =>{
    let dinero = prompt(`Dinero de ${n}`);

    if(dinero >= 0.6 && dinero < 1){
        return(`${n}, Comprate el helado de agua
        Y te sobra ` + (dinero - 0.6));
    }
    else if(dinero >= 1 && dinero < 1.6){
        return(`${n}, Comprate el helado de crema
        Y te sobra ` + (dinero - 1));
    }
    else if(dinero >= 1.6 && dinero < 1.7){
        return(`${n}, Comprate el helado de heladix
        Y te sobra ` + (dinero - 1.6));
    }
    else if(dinero >= 1.7 && dinero < 1.8){
        return(`${n}, Comprate el helado de heladovich
        Y te sobra ` + (dinero - 1.7));
    }
    else if(dinero >= 1.8 && dinero < 2.9){
        return(`${n}, Comprate el helado de helardo
        Y te sobra ` + (dinero - 1.8));
    }
    else if(dinero >= 2.9){
        return(`${n}, Comprate el helado con confites y pote de 1/4KG
        Y te sobra ` + (dinero - 2.9));
    }
    else{
        return(`${n}, Pinche pobre xd`)
    }
}

/*
alert(definirCompra("Cofla"));
alert(definirCompra("Roberto"));
alert(definirCompra("Pedro"));
*/

//Problema B
const compraBoleto = (precioBoleto) =>{
    let dinero = prompt("Dinero de Cofla");
    if(dinero >= precioBoleto && dinero < (precioBoleto*2)){
        return("Comprate 1 boleto y te sobra " + (dinero-precioBoleto));
    }
    else if(dinero >= (precioBoleto*2) && dinero < (precioBoleto*3)){
        return("Comprate 2 boletos y te sobra " + (dinero-(precioBoleto*2)));
    }
    else if(dinero >= (precioBoleto*3)){
        return("Comprate 3 boletos y regalas " + (dinero-(precioBoleto*3)));
    }
    else{
        return("Pinche Cofla coda");
    }
}

/*
alert(compraBoleto(5));
*/

//Problema C
const detector = ()=> {
    let decision = prompt("Resultado poligrafo");
    if(decision == 1){
        return(`Esta mintiendo
        Dar Descarga Eléctrica`);
    }
    else if(decision == 2){
        return(`Esta diciendo la verdad
        No hacer nada`);
    }
    else if(decision == 3){
        return(`Indecisión
        Aclarar pregunta`);
    }
    else{
        return(`Respuesta invalida`);
    }
}

/*
alert(detector());
*/