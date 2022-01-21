import cipher from './cipher.js';

console.log(cipher);
//funciones que deben de suceder
//charCodeAt()
//ACII


//funciones para los botones
let btncifrar = document.getElementById("btncifrar") // llamando al botón de HTML
btncifrar.addEventListener("click", cifrar) // Cuando le piquen al botón, realiza la función cifrar

let btndecifrar = document.getElementById("btndecifrar") // llamando al botón de HTML
btndecifrar.addEventListener("click", decifrar) // Cuando le piquen al botón, realiza la función decifrar

function cifrar() { 
    let mensaje = document.getElementById("txtentrada").value // Agarra el valor de "txtentrada" que metió el usuario
    let offset = document.getElementById("offset").value // Agarra el valor de "offset" que metió el usuario
    console.log(offset, mensaje) // Muestra esto en la consola
}
    
function decifrar() {
    let mensaje = document.getElementById("txtentrada").value 
    let offset = document.getElementById("offset").value
    console.log(offset, mensaje)
}

//document.getElementById("txtresultado").innerHTML = "Hola Eli"

//let btnlimpiar = document.getElementById("btnlimpiar")
//btnlimpiar.addEventListener("click", capturarmsj)
