'use strict'

let practicalWorks = "100 minutos hacer trabajos prácticos";
let study = "100 minutos de estudio";
let work = "240 minutos de trabajo";
let homework = "30 minutos de cosas de casa";
let relax = "10 minutos de descanso";

console.log("Tareas");

for(let i=0;i<14;i++){
    if(i == 0){
        console.group("Semana 1");
    }
    console.groupCollapsed("Día " + (i+1));
    console.log(work);
    console.log(relax);
    console.log(study);
    console.log(practicalWorks);
    console.log(homework);
    console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();
console.groupEnd();