const btnEnviar = document.querySelector(".enviar-nota");
const notaAlumno = document.querySelector("#nota-alumno");

btnEnviar.addEventListener("click",() => {
    let prevResultado, resultado, mensaje;
    try{
        prevResultado = parseInt(notaAlumno.value);
        if(isNaN(prevResultado)){
            throw "Error"
        }
        mensaje = definirMensaje(prevResultado);
        resultado = verificarAprobacion(8,6,prevResultado);
    } catch (error){
        resultado = "No es un numero";
        mensaje = "Ingresa un numero por favor";
    }

    abrirModal(resultado[0], mensaje);
});

const definirMensaje = (prevResultado) => {
    let resultado;
    switch(prevResultado){
        case 1: resultado = "No puedes ser tan HDP"
            break;
        case 2: resultado = "Eres muy malo"
            break;
        case 3: resultado = "No sabes casi nada"
            break;
        case 4: resultado = "Muy mal"
            break;
        case 5: resultado = "Mal"
            break;
        case 6: resultado = "Regular"
            break;
        case 7: resultado = "Bien, pero puede mejorar"
            break;
        case 8: resultado = "¡Muy bien!"
            break;
        case 9: resultado = "¡Excelente!"
            break;
        case 10: resultado = "¡Insuperable!"
            break;
        default: resultado = null;
            break;
    }
    return resultado;
}

const verificarAprobacion = (notaTrabajo1, notaTrabajo2, prevResultado)=>{
    let promedio = (prevResultado + notaTrabajo1 + notaTrabajo2)/3
    if (promedio > 7) {
        return [`<span class = 'green'>APROBADO</span>`, promedio];
    } else {
        return [`<span class = 'red'>DESAPROBADO</span>`, promedio];
    }
}

const abrirModal = (resultado, mensaje) => {
    document.querySelector(".resultado").innerHTML = resultado;
    document.querySelector(".mensaje").innerHTML = `Tu Examen: ` + mensaje;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = `aparecer 1s forwards`;
}