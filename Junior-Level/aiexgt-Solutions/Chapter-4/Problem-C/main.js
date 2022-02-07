let classes = 
    [["fisica",["perez","pedro","pepito","cofla","maria"]],
    ["programacion",["dalto","pedro","juan","pepito"]],
    ["logica",["hernandez","pedro","juan","pepito","cofla","maria"]],
    ["quimica",["rodriguez","pedro","juan","pepito","cofla","maria"]]];

const register = (student,subject) =>{
    people = classes[subject][1];
    if(people.length >= 6){
        document.write(`<b style="color:red">Lo siento ${student}, la clase de ${classes[subject][0]} ya esta llena.</b><br><br>`);
    }else{
        document.write(`<b style="color:green">Felicidades ${student}, te has inscrito a la clase ${classes[subject][0]}</b><br><br>`);
        classes[subject][1].push(student);
    };
};

// *Start Program
register("alex",0);
register("alex",1);
register("alex",2);
register("alex",3);
