
const cipher = {
  encode: function (offset, string) {// se declara la funcion que recibe dos parametros
    string = string.toUpperCase()// convierte el mensaje del texto a valor de mayusculas sin importar que se escriba en 
    let msjDecode = ""; //variable para guardar el mensaje final
    for (let i = 0; i < string.length; i++) {// ciclo que recorre la cadena de caracteres
     
      let msjUsuarios = string.charCodeAt(i);// obtiene el valor de ASCII del caracter en la posicion i, te da el valor en Ascii segun el valor de i
      let msjAscii= 0 //para saber el valor en ascci que va a tomar segun la codicion, un valor inicial
      if (msjUsuarios >= 65 && msjUsuarios <= 90) { //que sean una letra entre la a y la z
        msjAscii = ((msjUsuarios - 65 + offset) % 26) + 65; //esta formula es para que el resultado quede en codigo ascci
      }
      else {
        msjAscii = msjUsuarios // condicion si no esta entre A-Z el mensaje se queda igual
      }
      
      /*console.log("valueAscii" + msjUsuarios)
      console.log("valueFormula"+ (msjUsuarios - 65 + offset))*/
      msjDecode += String.fromCharCode(msjAscii);//convertir el codigo ASCII codificado a caracter, guardar cada caracter que surga de la cadena, es para acumular el mensaje y le sume el nuevo caracter
    }
    return msjDecode;// regresamos el mensaje codificado

    
    
  },
  decode: function (offset, string) { //declarando la funcion y asignando parametros
    
    string = string.toUpperCase()
    //console.log("toUpperCase " + string)
    let msjDecode = ""; // para guardar el mensaje final
    for (let i = 0; i < string.length; i++) { // ciclo para recorrer cadena de caracteres
      
      let msjUsuarios = string.charCodeAt(i);
      let msjAscii = 0
      let formulaDecode = msjUsuarios - offset % 26 //formula para decodificar el mensaje para saber el corrimiento de los caracteres hacia atras
      if (formulaDecode < 65)
        formulaDecode += 26// para evitar que tome valores negativos, habia que sumarle 26 para que siguiera con las demas letras
      if (formulaDecode >= 65 && formulaDecode <= 90) {// se evalua el rango caracter entre la A y la Z
        msjAscii = formulaDecode// se toma el caracter decodificado de la formula

      }
      else { msjAscii = msjUsuarios }//si no esta en el rango A-Z se queda igual
      /*console.log("valueAscii" + msjUsuarios)
      console.log("valueFormula" + (msjUsuarios - 65 - offset))*/
      msjDecode += String.fromCharCode(msjAscii); // se convierte de codigo ascii a caracter y lo guardamos en msjdecode
    }
    //console.log("msjDecode " + msjDecode)
    return msjDecode;

  }

}
export default cipher;

/*
const cipher = {
  // ...
  encode: function cifrar(string, offset) {
  
  let msjUsuarios = string.charCodeAt()
    let formula = (msjUsuarios - 65 + offset) % 26 + 65
    (x-65+n)%26+65
  
  let msjAscii =  formula.fromCharCode()
  return msjAscii
  }
 



};

export default cipher;
*/
