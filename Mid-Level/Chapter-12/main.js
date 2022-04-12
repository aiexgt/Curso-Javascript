const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Física 1",
        nota: 7
    },
    {
        nombre: "Matematicas",
        nota: 8
    },
    {
        nombre: "Programacion",
        nota: 7
    },

    {
        nombre: "Calculo 1",
        nota: 9
    },
    {
        nombre: "Ingles 1",
        nota: 7
    },
    {
        nombre: "Calculo 2",
        nota: 6
    },
    {
        nombre: "Bases de Datos",
        nota: 8
    },
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        let materia = materias[id];
        if(materia == undefined) {
            reject("La materia no existe");
        }else{
            setTimeout(() => resolve(materia),Math.random()*1000);
        }
    })
};

let materia = [];

const mostrarData = async () => {
    for(i=0; i<materias.length;i++){
        materia.push(await obtenerMateria(i));
        let newCodeHTML = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newCodeHTML;
    }
}

mostrarData();