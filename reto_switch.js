var a='piedra', b='papel', c='tijera';
var opcion_pc = [a,b,c]             /*organizamos variables en un arreglo */

var tu_opcion=prompt('Ingresa tu opcion en letras minisculas','piedra, papel, tijera');
var result_pc = opcion_pc[Math.floor(Math.random()*opcion_pc.length)]       /*formato para seleccionar valores randomicos de una lista de strings */




function resultado(){
    
    console.log("Tu escogiste:" + tu_opcion);
    console.log("Tu laptop escogio:" +result_pc);

    switch(true){
        case ((tu_opcion=='piedra' && result_pc==b)||(tu_opcion=='papel' && result_pc==a)):
            console.log("Gana papel");
            break
        case ((tu_opcion=='piedra' && result_pc==c)||(tu_opcion=='tijera' && result_pc==a)):
            console.log("Gana piedra");
            break
        case ((tu_opcion=='papel' && result_pc==c)||(tu_opcion=='tijera' && result_pc==b)):
            console.log("Gana tijera");
            breack
        default:
            console.log("Empates!! juega otra vez")       
            

    }

}