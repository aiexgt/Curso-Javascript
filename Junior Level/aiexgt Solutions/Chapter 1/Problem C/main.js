'use strict'

let falseButton = document.querySelector("#false-button");
let trueButton = document.querySelector("#true-button");
let undecicedButton = document.querySelector("#undeciced-button");

falseButton.addEventListener('click',function(){
    alert("Esta mintiendo - Dar Descarga Electrica");
});

trueButton.addEventListener('click',function(){
    alert("Esta diciendo la verdad - No Hacer Nada");
});

undecicedButton.addEventListener('click',function(){
    alert("Indeciso - Aclarar Pregunta");
});