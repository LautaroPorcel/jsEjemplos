function ejercicio4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    let dni = document.querySelector("#dni").value;
    let letrauser = document
 


    if(dni > 0 && dni < 99999999) {
    let nletra = dni % 23;

    let letra = letras[nletra];

    if(letra == letrauser){
        console.log("Las letras son iguales")
   

        console.log("La letra de tu DNI es:  "+ letra);
   
    }

    }
}
       
