//Problema A
class Celular {
    constructor(color,peso,tamano,resolucionDeCamara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucionDeCamara = resolucionDeCamara;
        this.memoriaRam = memoriaRam;
    }
    presionarBotonEncendido(){
        if(this.encedido == false || this.encedido == undefined){
            alert("Encendiendo celular");
            this.encedido = true;
        }else{
            alert("Apagando celular");
            this.encedido = false;
        }
    }
    reiniciar(){
        if(this.encedido == true){
            alert("Reiniciando celular");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b> ${this.color} </b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamano}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
        `;}
}

//Problema B
class CelularAltaGama extends Celular{
    constructor(color,peso,tamano,resolucionDeCamara,memoriaRam,resolucionDeCamaraExtra){
        super(color,peso,tamano,resolucionDeCamara,memoriaRam);
        this.resolucionDeCamaraExtra = resolucionDeCamaraExtra;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    mostrarAltaGama(){
        return this.mostrarInfo() + `Resolución de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b><br>`;
    }
}

/*
const celular1 = new Celular("rojo","150g","5'","hd","1GB");
const celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
const celular3 = new Celular("blanco","146g","5.9'","full hd","2GB");

const celular1 = new CelularAltaGama("rojo","130g","5.2'","4K","3GB","Full HD");
const celular2 = new CelularAltaGama("negro","142g","6'","4K","4GB","HD");


celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
document.write(`
    ${celular1.mostrarAltaGama()} <br>
    ${celular2.mostrarAltaGama()} <br>
    `
)
*/

//Problema C
class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App abierta");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b> ${this.descargas} </b><br>
        Puntuación: <b> ${this.puntuacion} </b><br>
        Peso: <b> ${this.peso} </b><br>
        `;
    }
}

const app = new App("16,000","5 estrellas","900mb");
const app2 = new App("1,000","4 estrellas","400mb");
const app3 = new App("6,000","4.5 estrellas","100mb");
const app4 = new App("23,000","4.8 estrellas","1gb");
const app5 = new App("900","5 estrellas","250mb");
const app6 = new App("17","3.7 estrellas","522mb");
const app7 = new App("42,981","2.9 estrellas","723mb");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`);

/*
app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();
*/