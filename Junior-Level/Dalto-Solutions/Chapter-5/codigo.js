//Problema A

const materias = {
	fisica: [90,6,3,"fisica"],
	matematica: [84,8,2,"matematica"],
	logica: [92,8,4,"logica"],
	quimica: [96,8,4,"quimica"],
	calculo: [91,6,3,"calculo"],
	programacion: [79,7,4,"programacion"],
	biologia: [75,9,2,"biologia"],
	bbdd: [98,9,1,"bbdd"],
	algebra: [100,10,4,"algebra"]
}

const calculoAprobar = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencias >= 90){
            console.log("%c Asistencia en orden","color:green");
        }else{
            console.log("%c Falta de asistencias","color:red");
        }

        if(promedio >= 7){
            console.log("%c Promedio en orden","color:green");
        }else{
            console.log("%c Promedio desaprobado","color:red");
        }

        if(trabajos >= 3){
            console.log("%c Trabajos practicos en Orden","color:green");
        }else{
            console.log("%c Falta trabajos practicos","color:red");
        }

    }
}

calculoAprobar();

//Problema B

let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("Tareas");

for(let i=0;i<14;i++){
    if(i == 0){
        console.group("Semana 1");
    }
    console.groupCollapsed("Día " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();
console.groupEnd();