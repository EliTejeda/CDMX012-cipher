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
      let offsetReducido = 26 % offset
      //if msjUsuarios - offsetReducido
      /*let offsetReducido = 26  % offset
      if (msjUsuarios - offsetReducido >= 65 && msjUsuarios - offsetReducido <= 90) {
        msjAscii = msjUsuarios - offsetReducido
      }
      else {
        msjAscii = msjUsuarios
      }*/
    
      /*if (msjUsuarios >= 65 && msjUsuarios <= 90) {
        let sumaOffset = msjUsuarios - 65 - offset
        if (sumaOffset <= 0)
       sumaOffset = sumaOffset + 26  
        msjAscii = ((sumaOffset)) % 26 + 65;
       // if (msjAscii < 65)
        //  msjAscii = msjAscii + 26 
      }
      else {
        msjAscii = msjUsuarios
      }*/
      console.log("offsetReducido " + offsetReducido)
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
