'use strict'

const studentName = document.getElementById("studentName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const sendButton = document.getElementById("btn-send");
const output = document.querySelector(".error");

sendButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validate();
    if(error[0]){
        output.innerHTML = error[1];
        output.classList.add("red");
        output.classList.remove("green");
    }else{
        output.innerHTML = "Solicitud enviada correctamente";
        output.classList.add("green");
        output.classList.remove("red");
    }
});

const validate = ()=>{
    let error = [];
    if(studentName.value.length < 5 || studentName.value.length > 40){
        error[0] = true;
        error[1] = "Nombre Invalido";
        return error;
    }else if(email.value.length < 5 ||
             email.value.length > 40 ||
             email.value.indexOf("@") == -1 ||
             email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "Email Invalido";
        return error;
    }else if(subject.value.length < 4 || subject.value.length > 40){
        error[0] = true;
        error[1] = "Materia Invalida";
        return error;
    }
    error[0] = false;
    return error;
}