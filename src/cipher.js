/*  */
const cipher= {
  encode: function (offset, string) {// se declara la funcion que recibe dos parametros
    string = string.toUpperCase()// convierte el mensaje del texto a valor de mayusculas sin importar que se escriba en minusculas
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
    string = string.toUpperCase()
    let msjDecode = "";
    for (let i = 0; i < string.length; i++) {
      let msjUsuarios = string.charCodeAt(i);
      let msjAscii = 0
      if (msjUsuarios >= 65 && msjUsuarios <= 90) {
        msjAscii = ((msjUsuarios - 65 - offset) % 26) + 65;
      }
      else {
        msjAscii = msjUsuarios
      }
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
