var estudiantes = ["Nico","Zulle"];
var deathCount = 0;
var nuevo = "Santi";


/*
var estudiantes = ["Juan","Juanita", "Daniela"];
var deathCount = 1;
var nuevo = "Julian";

var estudiantes = ["Nath","Luisa", "Noru"];
var deathCount = 2;
var nuevo = "Cami";
*/

function solution(estudiantes, deathCount, nuevo){
    for(deathCount; deathCount>0;deathCount--){
        estudiantes.pop();
    }

    estudiantes.push(nuevo);
    //return estudiantes
    console.log(estudiantes);


}



