var estudiantes = ["Nico","Zulle"];
var deathCount = 0;
var nuevo = "Santi";


/*
var estudiantes = ["Juan","Juanita", "Daniela"];
var deathCount = 1;
var nuevo = "Julian";
*/

function solution(estudiantes, deathCount, nuevo){
    for(deathCount; deathCount>0;deathCount--){
        estudiantes.pop();
    }
    
    estudiantes.push(nuevo);
    console.log(estudiantes);


}


/*while(deathCount==0){
    estudiantes.push(nuevo);
    console.log(estudiantes);
}*/



