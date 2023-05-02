var estudiantes = ["Maria", "Susana", "Ana", "Jose", "Daniel", "Mike" ];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}