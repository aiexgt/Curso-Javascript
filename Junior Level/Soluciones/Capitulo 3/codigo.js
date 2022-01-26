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
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        `
    }
}

const celular1 = new Celular("rojo","150g","5'","hd","1GB");
const celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
const celular3 = new Celular("blanco","146g","5.9'","full hd","2GB");

/*
celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();


document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()}
    `
)
*/