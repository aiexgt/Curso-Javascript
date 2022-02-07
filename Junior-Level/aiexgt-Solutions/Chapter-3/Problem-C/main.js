'use strict'

class App{
    constructor(downloads,score,size){
        this.downloads = downloads;
        this.score = score;
        this.size = size;
        this.start = false;
        this.install = false;
    }
    installApp(){
        if(this.install == false){
            this.install = true;
            alert("Aplicación instalada");
        }else{
            alert("Error: Ya esta instalada la aplicación");
        }
    }
    uninstallApp(){
        if(this.install == true){
            this.install = false;
            alert("Aplicación desinstalada");
        }else{
            alert("Error: No existe la aplicación");
        }
    }
    startApp(){
        if(this.install == false){
            alert("Error: No existe la aplicación");
        }else{
            if(this.start == true){
                alert("Error: Ya esta iniciada la aplicación");
            }else{
                alert("Aplicación iniciada");
                this.start = true;
            }
        }
    }
    closeApp(){
        if(this.install == false){
            alert("Error: No existe la aplicación");
        }else{
            if(this.start == false){
                alert("Error: La aplicación no esta iniciada");
            }else{
                alert("Aplicación cerrada");
                this.start = false;
            }
        }
    }
    showApp(){
        return `
            Descargas: ${this.downloads}
            Puntuación: ${this.score}
            Peso: ${this.size}
        `;
    }
}

let sendButton = document.querySelector("#send");
sendButton.addEventListener('click',()=>{
    event.preventDefault();
    let downloads = document.querySelector("#downloads").value;
    let score = document.querySelector("#score").value;
    let size = document.querySelector("#size").value;
    const aplication = new App(downloads,score,size);
    alert("Aplicación Guardada");
    console.log(aplication);

    let installButton = document.querySelector("#install");
    installButton.addEventListener('click',()=>{
        event.preventDefault();
        aplication.installApp();
    });

    let uninstallButton = document.querySelector("#uninstall");
    uninstallButton.addEventListener('click',()=>{
        event.preventDefault();
        aplication.uninstallApp();
    });

    let startButton = document.querySelector("#start");
    startButton.addEventListener('click',()=>{
        event.preventDefault();
        aplication.startApp();
    });

    let closeButton = document.querySelector("#close");
    closeButton.addEventListener('click',()=>{
        event.preventDefault();
        aplication.closeApp();
    });

    let showButton = document.querySelector("#show");
    showButton.addEventListener('click',()=>{
        event.preventDefault();
        alert(aplication.showApp());
    });

});