'use strict'

let register = document.querySelector("#problem-b"); 
let student = [];
let counterDays = 1;
let documentFragment = document.createDocumentFragment();

const registerStudent = ()=>{
    let quantity = prompt("Cuantos alumnos desea registrar?",0);
    for(let i=1;i<=quantity;i++){
        student[i] = prompt("Nombre de alumno: ","");
    }
}

const takeAttendance = (day)=>{
    let divRegister = `
    <h4 id="tittle-day">Día #${day}</h4>
    <form>
    `;
    for(let i=1;i<student.length;i++){
        divRegister = divRegister + `
            <label for="student${i}"><b>${student[i]}</b></label><br>
            <input type="radio" id="student${i}" name="student${i}" value="p">Presente
            <input type="radio" id="student${i}" name="student${i}" value="a">Ausente<br><br>
            `;
        };
    divRegister = divRegister + `
        <input type="submit" id="enviar" value="Enviar">
    </form>
    `;
    let div = document.createElement("DIV");
    div.innerHTML = divRegister;
    documentFragment.appendChild(div);
    return documentFragment;
}

registerStudent();
let salida = takeAttendance(counterDays);
register.appendChild(salida);


let button = document.querySelector("#enviar");
button.addEventListener('click',function(){
    for(let i=1;i<student.length;i++){
        event.preventDefault();
        let studentValue = document.querySelector(`input[name="student${i}"]:checked`);
        student[i][counterDays] = studentValue.value;
        console.log(student[i][counterDays]);
    }
    counterDays++;
    let tittleDay = document.querySelector("#tittle-day");
    tittleDay.innerHTML = `Día #${counterDays}`;
});