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

//Problema B
/*
let cantidad = prompt("¿Cuantos alumnos son");
let alumnosTotales = [];


for(let i=0;i<cantidad;i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre, p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for(let i=0;i<30;i++){
    for(let alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(let alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style='color:red'>- REPROBADO POR INASISTENCIAS </b><br><br> "
    }else{
        resultado+= "<br><br>";
    }
    document.write(resultado);
}
*/

//Problema C

const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicacion = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1. Suma, 2: Resta, 3: Multiplicación, 4: División");

let numero1 = prompt("Primer numero");
let numero2 = prompt("Segundo numero");
let resultado;

if(operacion == 1){
    resultado = suma(numero1,numero2);
}
else if(operacion == 2){
    resultado = resta(numero1,numero2);
}
else if(operacion == 3){
    resultado = multiplicacion(numero1,numero2);
}
else if(operacion == 4){
    resultado = division(numero1,numero2);
}
else{
    resultado = "Error";
}

alert("Resultado: " + resultado);