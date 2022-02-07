'use strict'

let register = document.querySelector("#contenedor")
let student = [];
let day = 1;

// Función para registrar estudiantes (cantidad y nombres)
const registerStudent = ()=>{
    let quantity = prompt("¿Cuantos alumnos desea registrar?",0);
    for(let i=0;i<quantity;i++){
        student.push([prompt("Nombre del alumno: ",)]);
        student[i].push([]);
    }
}

// Función para imprimir el formulario
let documentFragment = document.createDocumentFragment();
const takeAttendance = (day)=>{
    let divRegister = `
    <h4 id="tittle-day">Día #${day}</h4>
    <form>
    `;
    for(let i in student){
        divRegister = divRegister + `
            <label for="student${i}"><b>${student[i][0]}</b></label><br>
            <input type="radio" class="student${i}p" name="student${i}" value="p">Presente
            <input type="radio" class="student${i}a" name="student${i}" value="a">Ausente<br><br>
            `;
        };
    divRegister = divRegister + `
        <input type="submit" id="enviar" value="Enviar">
    </form>
    `;
    let div = document.createElement("DIV");
    div.classList.add(".flex-item")
    div.innerHTML = divRegister;
    documentFragment.appendChild(div);
    return documentFragment;
}

//Funcion para imprimir resultados
const printResult = () =>{
    let divResult = `
    <h2>Resultado</h2>
    <div>
    `;
    for(let i in student){
        let asistence = 1
        for(let j of student[i][1]){
            if(j == "p"){
                asistence++;
            }
        }
        divResult = divResult + `
            <h4>Estudiante: ${student[i][0]}</h4>
            Asistencias: ${asistence}</p>
        `;
        if(asistence > 18){
            divResult = divResult + `<p style="color:green"><b>Aprobado</b></p>`;
        }else{
            divResult = divResult + `<p style="color:red"><b>Reprobado</b></p>`;
        }
        divResult = divResult + "<br><br>"
        register.innerHTML = divResult;
    }
}

registerStudent();
register.appendChild(takeAttendance(day));

let buttonSend = document.querySelector("#enviar");
buttonSend.addEventListener('click',function(){
    event.preventDefault();
    if(day < 30){    
        for(let i in student){
            student[i][1].push(document.querySelector(`input[name="student${i}"]:checked`).value);
        }
        day++;
        document.querySelector("#tittle-day").innerHTML = `Día #${day}`;
    }else{
        printResult();
    }
});

