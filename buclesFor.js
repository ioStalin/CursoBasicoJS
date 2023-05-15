var estudiantes = ["David","Maria","Jose","Daniela","Rosa","Susana"];


function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}


/*
for(var i=0; i<estudiante.length; i++){
   // console.log(estudiantes[i]);
   // console.log("*****");
    saludarEstudiante(estudiantes[i]);
}
*/

//////////////////////////////
