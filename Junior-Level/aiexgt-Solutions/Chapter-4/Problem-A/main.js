'use strict'

let result = document.querySelector("#result");

const sumar = (valor1,valor2) => {
    return (valor1+valor2);
}

const restar = (valor1,valor2) => {
    return (valor1-valor2);
}

const multiplicar = (valor1,valor2) => {
    return (valor1*valor2);
}

const dividir = (valor1,valor2) => {
    return (valor1/valor2);
}

const potenciar = (valor1,valor2) => {
    return (Math.pow(valor1,valor2));
}

const raizCuadrada = (valor1) => {
    return (Math.sqrt(valor1));
}

const raizCubica = (valor1) => {
    return (Math.cbrt(valor1));
}

let buttonCalculate = document.querySelector("#calculate");

buttonCalculate.addEventListener('click',function(){
    event.preventDefault();
    let valor1 = parseInt(document.querySelector("#value1").value);
    let valor2 = parseInt(document.querySelector("#value2").value);
    let operation = document.querySelector(`input[name="operation"]:checked`).value;
    let resultado;
    if(operation == "sumar"){
        resultado = "" + valor1 + "+" + valor2 + "=" + sumar(valor1,valor2);
    }
    else if(operation == "restar"){
        resultado = "" + valor1 + "-" + valor2 + "=" + restar(valor1,valor2);
    }
    else if(operation == "multiplicar"){
        resultado = "" + valor1 + "*" + valor2 + "=" + multiplicar(valor1,valor2);
    }
    else if(operation == "dividir"){
        resultado = "" + valor1 + "/" + valor2 + "=" + dividir(valor1,valor2);
    }
    else if(operation == "potenciar"){
        resultado = "" + valor1 + "^" + valor2 + "=" + potenciar(valor1,valor2);
    }
    else if(operation == "rCuadrada"){
        resultado = "Raiz Cuadrada de " + valor1 + " = " + raizCuadrada(valor1);
    }
    else if(operation == "rCubica"){
        resultado = "Raiz Cubica de " + valor1 + " = " + raizCubica(valor1);
    }
    let div = document.createElement("H2");
    div.innerHTML = resultado;
    result.appendChild(div);
});