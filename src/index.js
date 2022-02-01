import cipher from './cipher.js';

//console.log(cipher); //mostrar en la consola
    
let txtResult = document.getElementById("txtResult")//jalar el area de texto del DOM
let btnClear = document.getElementById("btnClear")//jalar el boton de limpiar del DOM
btnClear.addEventListener("click", function () {//agregar el listener para borra el texto
    let txtUsers = document.getElementById("txtUsers")
    let offset = document.getElementById("offset")
    
    txtResult.value = ""//le cambiamos el valor para limpiarlo 
    txtUsers.value = ""
    offset.value = ""
})
    
let btnEncode = document.getElementById("btnEncode");//llamando al boton de HTML
btnEncode.addEventListener("click", function () { //ejecutar la funcion cifrar
    let txtUsers = document.getElementById("txtUsers").value // activar que el cifrado suceda en la caja de texto
    let offset = parseInt(document.getElementById("offset").value) //que el valor del offset se convierta a numero entero
    let msjFinalEncode = cipher.encode(offset, txtUsers); // se ejecute el cipher usando el offset que elija el usuario y el texto que coloque
    //window.alert(msjFinalEncode);//que se muestre como alerta
    txtResult.value = msjFinalEncode;
})
  
let btnDecode = document.getElementById("btnDecode");//llamando al boton de HTML
btnDecode.addEventListener("click", function () { //ejecutar la funcion cifrar
    let txtUsers = document.getElementById("txtUsers").value // activar que el cifrado suceda en la caja de texto
    let offset = parseInt(document.getElementById("offset").value) //que el numero del offset se convierta a numero entero
    let msjFinalDecode = cipher.decode(offset, txtUsers); // se ejecute el cipher usando el offset que elija el usuario y el texto que coloque
    //window.alert(msjFinalDecode);//que se muestre como alerta
    txtResult.value = msjFinalDecode
})









/*funciones que deben de suceder
charCodeAt()
ACII
funciones para los botones
let btnEncode = document.getElementById("btnEncode") // llamando al botón de HTML
btnEncode.addEventListener("click", cifrar) // Cuando le piquen al botón, realiza la función cifrar

let btndecifrar = document.getElementById("btndecifrar") // llamando al botón de HTML
btndecifrar.addEventListener("click", decifrar) // Cuando le piquen al botón, realiza la función decifrar

function cifrar() { 
    let mensaje = document.getElementById("txtUsers").value // Agarra el valor de "txtUsers" que metió el usuario
    let offset = document.getElementById("offset").value // Agarra el valor de "offset" que metió el usuario
    let estoCifra = cipher.encode(mensaje. offset)//ERROR CHECAR OFFSETC

    document.getElementById("txtresultado").innerHTML=estoCifra//imprimir resultado de encode en pantalla
    console.log(estoCifra) // Muestra esto en la consola
}
    function decifrar() {
    let mensaje = document.getElementById("txtUsers").value 
    let offset = document.getElementById("offset").value
    console.log(offset, mensaje)
}
document.getElementById("txtresultado").innerHTML = "Hola Eli"
let btnlimpiar = document.getElementById("btnlimpiar")
btnlimpiar.addEventListener("click", capturarmsj)  */