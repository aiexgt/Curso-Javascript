'use strict'

//Problem A

let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}.
¿Desea comprarla?
`);

if(comprar){
    alert("Compra realizada");
}else{
    alert("Compra cancelada");
}

//Problem B
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>
Hostname: <b>${hostname}</b><br>
Pathname: <b>${pathname}</b><br>
href: <b>${href}</b><br>`;

document.write(html);