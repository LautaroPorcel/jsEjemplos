function ejercicio6(){
    let parámetro = prompt("Ingrese el número entero");
    let resul = paroImpar(parámetro);

    console.log(resul);
}

function paroImpar(num) {
    if (num == 0){
        return "El número ingresado no es válido";
    }
    if (num % 2 == 0 ) {
    return "El numero es par";
    }
     else {
    return "El numero es impar";
    }
 }
