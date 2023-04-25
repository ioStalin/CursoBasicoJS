var articulos = prompt("Ingresa el articulo que deseas: computadora, celular, cable","Computadora, Celular, Cable");

function solution(articulos){
    switch(articulos){
        case "computadora":
            //console.log("Con mi computadora puedo programar usando Javascript");
            return "Con mi computadora puedo programar usando Javascript";
          
        
        case "celular":
            //console.log("En mi celular puedo aprender usando la app de Platzi");
            return "En mi celular puedo aprender usando la app de Platzi";
            //break;

        case "cable":
            //console.log("Hay un cable en mi bota");
            return "Hay un cable en mi bota";
            //break;
        
        default:
            return "Articulo no encontrado";
            //console.log("Articulo no encontrado");


    }

}