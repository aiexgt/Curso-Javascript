'use strict'

const getInformation = (classSubject) =>{
    let classes = {
        fisica: ["Lopez","Alex","Miguel","Rene","Daily","Cofla"],
        programacion: ["Lima","Alex","Rene"],
        logica: ["Loarca","Miguel","Alex"],
        quimica: ["Paniagua","Daily","Cofla"]
    }
    if(classes[classSubject] !== undefined){
        return [classes[classSubject],classSubject,classes];
    }else{
        return classes
    }
}

const showInformation = (classSubject) =>{
    let information = getInformation(classSubject);
    if(information !== false){
        let professor = information[0][0];
        let students = information[0];
        students.shift();
        document.write(`
        Profesor de ${information[1]} es ${professor} <br>
        Los alumnos son ${students} <br><br>`);
    }
}

const numberOfClasses = (student) =>{
    let information = getInformation();
    let presentClass = [];
    let totalQuantity = 0;
    for(let i in information){
        if(information[i].includes(student)){
            totalQuantity++;
            presentClass.push(" " + i);
        }
    }
    document.write(`
    El alumno ${student} esta en ${totalQuantity} de clases <br>
    Esta cursando las clases ${presentClass} <br><br>`);
}

// *Start Program
showInformation("fisica");
showInformation("quimica");
showInformation("programacion");
showInformation("logica");
numberOfClasses("Cofla");
numberOfClasses("Alex");