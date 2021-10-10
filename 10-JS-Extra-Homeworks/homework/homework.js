// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var accountant = 1;
  var letter = "";
  var object = {};
    for(i = 0; i< string.length; i++){
      letter = string.charAt(i)
      if (letter in object){
        continue;
      } else{
      for(m = i+1; m <= string.length; m++){
        if( letter == string.charAt(m)){
          accountant++;
          }; object[string.charAt(i)] = accountant
        }; accountant = 1; 
        }
    } return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringmin = "";
  var stringmay = "";
  for(i = 0; i< s.length; i++){
    if (s.charAt(i).toUpperCase() === s.charAt(i)){
      stringmay += s.charAt(i)
    } else{
      stringmin += s.charAt(i)
    };
  }; return stringmay + stringmin
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var sentence = str.split(" ")
  var newsentence = [];
  for(m = 0; m < sentence.length; m++){
    var mirror = ""
    var word = sentence[m]
    if(word.length > 1){
      for(i = word.length-1; i >= 0; i--){
        mirror += word.charAt(i);
      }; newsentence.push(mirror);
    } else if(word.length == 1){
      newsentence.push(word);
    }; 
  };
  var defnewsentence = newsentence.join(" ");
  return defnewsentence
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numbercapicua = Number(numero.toString().split("").reverse().join(""));
  let result = numbercapicua - numero;
  if( result === 0){
    return "Es capicua"
  } else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let letter = cadena.split("");
  let newarray = [];
  for( i = 0; i < letter.length; i++){
    if( letter[i] !== "a" && letter[i] !== "b" && letter[i] !== "c"){
      newarray.push(letter[i]);
    }
  }; return String(newarray.join(""))
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort( (a, b) => {
    if(a.length == b.length) {
      return 0;
    }
    if(a.length < b.length){
      return -1;
    }
    return 1;
  });
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let newarray = [];
  for(let i = 0; i < arreglo2.length; i++){
  if(arreglo1.includes(arreglo2[i])){
    newarray.push(arreglo2[i]);
  };
  }; return newarray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

