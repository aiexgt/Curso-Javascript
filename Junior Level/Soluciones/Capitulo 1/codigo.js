'use strict'

const definirCompra = function(n){
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

alert(definirCompra("Cofla"));
alert(definirCompra("Roberto"));
alert(definirCompra("Pedro"));