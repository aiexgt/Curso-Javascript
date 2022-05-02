const getInfo = async () => {
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try{
        resultado = await axios("informacion.txt");
        aprobados.textContent = resultado.data.aprobados;
        desaprobados.textContent = resultado.data.desaprobados;
    }catch(e){
        aprobados.innerHTML = "La API falló";
        desaprobados.innerHTML = "La API falló";
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo);