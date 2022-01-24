/*  */
class cipher{
  static encode(offset, string) {
    let mensajeCifrado = "";
    for (let i = 0; i < string.length; i++) {
      let unaLetra = string.charCodeAt(i);
      let letraCifrada = (unaLetra - 65 + offset) % 26 + 65;
      mensajeCifrado += String.fromCharCode(letraCifrada);
    }
    return mensajeCifrado;
    
    
  }
  static decode(offset, string) {
    return "cad2";

  }

}
export default cipher;

/*
const cipher = {
  // ...
  encode: function cifrar(string, offset) {
  
  let unaletra = string.charCodeAt()
    let formula = (unaletra - 65 + offset) % 26 + 65
    (x-65+n)%26+65
  
  let letraCifrada =  formula.fromCharCode()
  return letraCifrada
  }
 



};

export default cipher;
*/
