'use strict'
let students = [{
    name: "Alex Lima",
    email: "lima@gmail.com",
    subject: "Proyecto de graduación"   
},{
    name: "Pedro Fernandez",
    email: "fernandez@gmail.com",
    subject: "Bases de datos 2"   
},{
    name: "Luis Cajas",
    email: "cajas@gmail.com",
    subject: "Algoritmos"   
},{
    name: "Rene Machorro",
    email: "machorro@gmail.com",
    subject: "Física 2"   
},{
    name: "Eduardo Top",
    email: "top@gmail.com",
    subject: "Compiladores"   
},{
    name: "Eva Florian",
    email: "florian@gmail.com",
    subject: "Logica"   
}]

const btnConfirm = document.querySelector(".btn-confirm");

btnConfirm.addEventListener("click",()=>{
    let alertConfirm = confirm("¿Quiere realizar los cambios?");
    if(alertConfirm){
        document.body.removeChild(btnConfirm);
        let elements = document.querySelectorAll(".weak");
        let selectedWeaks = document.querySelectorAll(".selected-weak");
        for(let element in elements){
            if(typeof elements[element].textContent == 'string'){
                let weak = elements[element];
                weak.innerHTML = selectedWeaks[element].value;
            }
        } 
    }
});

const container = document.querySelector(".grid-container")

let htmlCode = "";
for(let student in students){
    let data =  students[student];
    let name = data["name"];
    let email = data["email"];
    let subject = data["subject"];
    htmlCode += `
    <div class="grid-item name">${name}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item subject">${subject}</div>
        <div class="grid-item weak">
            <select class="selected-weak">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
}
container.innerHTML = htmlCode;