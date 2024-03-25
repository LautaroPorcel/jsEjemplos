function ejercicio2(){
    var valores = [true, 5, false, "hola", "adios", 2];

    if (valores[3].length<valores[4].length) {
        console.log(valores[0]);
        console.log("adios>hola");
    }else{
        console.log(valores[2]);
        console.log("no se cumple la condicion");
    }
  
   console.log(valores[1]+valores[5]);
   console.log(valores[1]-valores[5]);
   console.log(valores[1]*valores[5]);
   console.log(valores[1]/valores[5]);
   console.log(valores[5]/valores[1]);
   console.log(valores[5]-valores[1]);

}