var estudiante = ["David","Maria","Daniel","Sergio","Rosa","Susana"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i=0; i<estudiante.length; i++){
    console.log(estudiante[i]);
    console.log("*****");
    saludarEstudiante(estudiante[i]);
}