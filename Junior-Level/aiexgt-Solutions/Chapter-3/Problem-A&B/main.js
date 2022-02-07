'use strict'

class Celular{
    constructor(color,peso,tamano,resolucionDeCamara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucionDeCamara = resolucionDeCamara;
        this.memoriaRam = memoriaRam;
    }
    pressPowerButton(){
        if(this.power == false || this.power == undefined){
            alert("Encendiendo Celular");
            this.power = true;
        }else{
            alert("Apagando Celular");
            this.power = false;
        }
    }
    reset(){
        if(this.power == true){
            alert("Reiniciando Celular");
        }else{
            alert("Error: El Celular esta apagado");
        }
    }
    takePhoto(){
        alert(`Foto Tomada (Resolución: ${this.resolucionDeCamara})`);
    }
    recordVideo(){
        alert(`Video Grabado (Resolución: ${this.resolucionDeCamara})`);
    }
    showInformation(){
        return `
        Color: ${this.color}
        Peso: ${this.peso}
        Tamaño: ${this.tamano}
        Memoria RAM: ${this.memoriaRam}
        Resolución de Cámara: ${this.resolucionDeCamara}`;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamano,resolucionDeCamara,memoriaRam,resolucionDeCamaraExtra){
        super(color,peso,tamano,resolucionDeCamara,memoriaRam);
        this.resolucionDeCamaraExtra = resolucionDeCamaraExtra;
    }
    recordSlowVideo(){
        alert("Estas grabando en camara lenta");
    }
    facialRecognition(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    showInformationHigh(){
        return this.showInformation() + `
        Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}

let documentFragment = document.createDocumentFragment();
let register = document.querySelector("#form-phone");

const printForm = (type) =>{
    let divForm = `
        <label for="color">Color</label><br>
        <input type="text" id="color"><br>
        <label for="peso">Peso</label><br>
        <input type="text" id="peso"><br>
        <label for="tamano">Tamaño</label><br>
        <input type="text" id="tamano"><br>
        <label for="rCamara">Resolución Cámara</label><br>
        <input type="text" id="rCamara"><br>
        <label for="mRam">Memoría Ram</label><br>
        <input type="text" id="mRam"><br>`;
    if(type == 2){
        divForm = divForm + `
        <label for="rCamaraExtra">Resolución Cámara Extra</label><br>
        <input type="text" id="rCamaraExtra"><br>`;
    }
    divForm = divForm + `
        <br>
        <input type="submit" id="enviar" value="Enviar">`;
        let div = document.createElement("DIV");
        div.innerHTML = divForm;
        documentFragment.appendChild(div);
        register.appendChild(documentFragment);
}

const printButtons = (type) =>{
    let divForm = `
    <h2>Acciones</h2>
    <button id="buttonPower" value="power">Power</button>
    <button id="buttonReset" value="reset">Reset</button>
    <button id="buttonPhoto" value="photo">Tomar Foto</button>
    <button id="buttonVideo" value="video">Grabar Video</button>
    <button id="buttonShow" value="show">Mostrar Información</button>
    `;
    if(type == 2){
        divForm = divForm + `
        <button id="buttonSlowVideo" value="slowVideo">Grabar Video Lento</button>
        <button id="buttonFacial" value="facial">Reconocimiento Facial</button>`;
    }
    let div = document.createElement("DIV");
    div.innerHTML = divForm;
    buttonsArea.appendChild(div);
}

let typePhone = prompt("Elije Tipo (1.Gama Media/2.Gama Alta)",);
let print = printForm(typePhone);
let buttonSend = document.querySelector("#enviar");
let phone;
let buttonsArea = document.querySelector("#buttons");

buttonSend.addEventListener('click',()=>{
    event.preventDefault();
    let color = document.querySelector("#color").value;
    let peso = document.querySelector("#peso").value;
    let tamano = document.querySelector("#tamano").value;
    let resolucionDeCamara = document.querySelector("#rCamara").value;
    let memoriaRam = document.querySelector("#mRam").value;
    if(typePhone == 2){
        let resolucionDeCamaraExtra = document.querySelector("#rCamaraExtra").value;
        phone = new CelularAltaGama(color,peso,tamano,resolucionDeCamara,memoriaRam,resolucionDeCamaraExtra);

    }else{
        phone = new Celular(color,peso,tamano,resolucionDeCamara,memoriaRam);
    }
    alert("Información Guardada");
    printButtons(typePhone);

    let buttonPower = document.querySelector("#buttonPower");
    buttonPower.addEventListener('click',()=>{
        event.preventDefault();
        phone.pressPowerButton();
    });

    let buttonReset = document.querySelector("#buttonReset");
    buttonReset.addEventListener('click',()=>{
        event.preventDefault();
        phone.reset();
    });

    let buttonPhoto = document.querySelector("#buttonPhoto");
    buttonPhoto.addEventListener('click',()=>{
        event.preventDefault();
        phone.takePhoto();
    });

    let buttonVideo = document.querySelector("#buttonVideo");
    buttonVideo.addEventListener('click',()=>{
        event.preventDefault();
        phone.recordVideo();
    });

    if(typePhone == 2){
        let buttonShow = document.querySelector("#buttonShow");
        buttonShow.addEventListener('click',()=>{
            event.preventDefault();
            let information = phone.showInformationHigh();
            alert(information);
        });

        let buttonSlowVideo = document.querySelector("#buttonSlowVideo");
        buttonSlowVideo.addEventListener('click',()=>{
            event.preventDefault();
            phone.recordSlowVideo();
        });

        let buttonFacial = document.querySelector("#buttonFacial");
        buttonFacial.addEventListener('click',()=>{
            event.preventDefault();
            phone.facialRecognition();
        });
    }else{
        let buttonShow = document.querySelector("#buttonShow");
        buttonShow.addEventListener('click',()=>{
            event.preventDefault();
            let information = phone.showInformation();
            alert(information);
        });
    }
    
});
