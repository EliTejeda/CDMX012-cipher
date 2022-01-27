/*  */
const cipher= {
  encode: function (offset, string) {// se declara la funcion que recibe dos parametros
    string = string.toUpperCase()// convierte el mensaje del texto a valor de mayusculas sin importar que se escriba en 
    let msjDecode = ""; //variable para guardar el mensaje final
    for (let i = 0; i < string.length; i++) {// ciclo que recorre la cadena de caracteres
      let msjUsuarios = string.charCodeAt(i);// obtiene el valor de ASCII del caracter en la posicion i
      let msjAscii= 0
      if (msjUsuarios >= 65 && msjUsuarios <= 90) {
        msjAscii = ((msjUsuarios - 65 + offset) % 26) + 65;
      }
      else {
        msjAscii = msjUsuarios
      }
      
      console.log("valueAscii" + msjUsuarios)
      console.log("valueFormula"+ (msjUsuarios - 65 + offset))
      msjDecode += String.fromCharCode(msjAscii);//convertir el codigo ASCII codificado a caracter
    }
    return msjDecode;// regresamos el mensaje codificado

    
    
  },
  decode: function (offset, string) {
    // if (string < 0) {
      //string += 26
    //} 
    console.log("formaNormal " + string)
    string = string.toUpperCase()
    console.log("toUpperCase " + string)
    let msjDecode = "";
    for (let i = 0; i < string.length; i++) {
      
      let msjUsuarios = string.charCodeAt(i);
      let msjAscii = 0
      let formulaDecode = msjUsuarios - offset % 26
      if (formulaDecode < 65)
        formulaDecode += 26
      if (formulaDecode >= 65 && formulaDecode <= 90) {
        msjAscii = formulaDecode

      }
      else { msjAscii = msjUsuarios }

      
      console.log("valueAscii" + msjUsuarios)
      console.log("valueFormula" + (msjUsuarios - 65 - offset))
      msjDecode += String.fromCharCode(msjAscii);
    }
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
