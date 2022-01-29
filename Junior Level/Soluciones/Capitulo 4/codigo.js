//Problema A
/*
class Calculadora{
    constructor(){

    }

    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }

    potenciar(num, exp){
        return Math.pow(num,exp);
    }

    raizCuadrada(num){
        return Math.sqrt(num);
    }

    raizCubica(num){
        return Math.cbrt(num);
    }

}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operacion = prompt("1. Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

let numero1 = prompt("Primer numero");
if(operacion != 6 && operacion != 7){
    let numero2 = prompt("Segundo numero");
}
let resultado;

if(operacion == 1){
    resultado = calculadora.sumar(numero1,numero2);
}
else if(operacion == 2){
    resultado = calculadora.restar(numero1,numero2);
}
else if(operacion == 3){
    resultado = calculadora.multiplicar(numero1,numero2);
}
else if(operacion == 4){
    resultado = calculadora.dividir(numero1,numero2);
}
else if(operacion == 5){
    resultado = calculadora.potenciar(numero1,numero2);
}
else if(operacion == 6){
    resultado = calculadora.raizCuadrada(numero1);
}
else if(operacion == 7){
    resultado = calculadora.raizCubica(numero1);
}
else{
    resultado = "Error";
}

alert("Resultado: " + resultado);
*/

//Problema B

const obtenerInformacion = (materia)=>{
    let materias = {
        fisica: ["Lopez","Alex","Miguel","Rene","Daily","Cofla"],
        programacion: ["Lima","Alex","Rene"],
        logica: ["Loarca","Miguel","Alex"],
        quimica: ["Paniagua","Daily","Cofla"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`Profesor de ${informacion[1]} es ${profesor} <br>
        Los alumnos son ${alumnos} <br><br>`);
    }
}

const cantidadClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let CantidadTotal = 0;
    for(let info in informacion){
        if(informacion[info].includes(alumno)){
            CantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `El alumno ${alumno} esta en ${CantidadTotal} de clases <br>
    Esta cursando las clases ${clasesPresentes} <br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadClases("Cofla"));
document.write(cantidadClases("Alex"));