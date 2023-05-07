function auto(marca, modelo, annio){    /*Formato para crear funcion constructora */
    this.marca = marca;                  /*La palabra this hace referencia a cada uno de los oarametros dentro del objeto, en este caso los parametros de la funcion  */
    this.modelo = modelo;
    this.annio = annio;          
}


var autoNuevo = new auto("Tesla","Model 3","2020");
var autoNuevo1 = new auto("Tesla","Model X","2018");
var autoNuevo2 = new auto("Toyota","Corolla","2023")


