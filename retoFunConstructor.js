//1era forma de resolver reto
//Inicializo variable en la cual se guardara el arreglo de objetos
var autos = []

//Se crea la funucion Constructora
function auto(marca,modelo, anio){
    this.marca = userMarca;
    this.modelo = userModelo;
    this.anio = userAnio;
}

//Se crea el ciclo for para ingresar datos por prompt hasta cumplir con la condicion de ingresar 5 carros 
//a traves de metodo push se aniade el nuevo objeto (new) al array de carros; en el nuevo objeto se agregan los valores de las variables user
for (var i=0; i<=5; i++){
    var userMarca = prompt("Ingresa Marca del auto "+ i +" :");
    var userModelo = prompt("Ingresa modelo del auto "+ i +" :");
    var userAnio = prompt("Ingresa anio del auto "+ i +" :");
    autos.push(new auto(userMarca,userModelo,userAnio) );

}


//for para escribir los valores contenidos en el arreglo autos. En este caso los valores contenidos en el arreglo son objetos
for(i=0; i<autos.length; i++){
    console.log(autos[i]);
}
//////////////////////////////////////////////////////


//2da forma de resolver reto
var autos = [];
var cantidadAutos = 0;
var cantidadRegistrados = 0;

//Se crea la funucion Constructora
function auto(marca,modelo, anio){
    this.marca = userMarca;
    this.modelo = userModelo;
    this.anio = userAnio;
}

cantidadAutos = prompt("Ingrese la cantidad de autos que desea almacenar: ");

while(cantidadRegistrados<cantidadAutos){
    var userMarca = prompt("Ingresa Marca del auto ");
    var userModelo = prompt("Ingresa modelo del auto ");
    var userAnio = prompt("Ingresa anio del auto ");

    var autoNuevo = new auto(userMarca, userModelo, userAnio);

    autos.unshift(autoNuevo);
    
    cantidadRegistrados++;
}

console.log(autos);

//////////////////////////////////////////////////////




