'use strict'
let output = document.querySelector("#problem-a")

const getInformation = ()=> {
    let assistance = document.querySelector("#form-student input[name='assistance']").value;
    let average = document.querySelector("#form-student input[name='average']").value;
    let works = document.querySelector("#form-student input[name='works']").value;
    let subject = document.querySelector("#form-student input[name='subject']").value;
    return[assistance,average,works,subject];
};

const calculateScores = ()=> {
    let information = getInformation();
    let divOutput = `<h2>Resultado Clase ${information[3]}</h2><p>`;
    if(information[0] >= 90){
        divOutput = divOutput + "<b style='color:green'>Asistencia en orden</b><br>";
    }else{
        divOutput = divOutput + "<b style='color:red'>Falta de asistencias</b><br>"
    }
    if(information[1] >= 7){
        divOutput = divOutput + "<b style='color:green'>Promedio en orden</b><br>";
    }else{
        divOutput = divOutput + "<b style='color:red'>Falta desaprobado</b><br>"
    }
    if(information[2] >= 3){
        divOutput = divOutput + "<b style='color:green'>Trabajos practicos en orden</b><br>";
    }else{
        divOutput = divOutput + "<b style='color:red'>Falta de trabajos practicos</b><br>"
    }
    let div = document.createElement("DIV");
    div.innerHTML = divOutput;
    output.appendChild(div);
}


let buttonSend = document.querySelector("#form-student input[name='send']");
buttonSend.addEventListener('click',()=>{
    event.preventDefault();
    calculateScores();
});