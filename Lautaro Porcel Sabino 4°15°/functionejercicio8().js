function ejercicio8(){

    let texto = prompt("Ingrese una cadena de texto para verificar si es un palíndromo:");
    let resultado = palindromo(texto);

    function palindromo(cadena) {
        const cadenaProcesada = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
       
       
        const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
       
       
        return cadenaProcesada === cadenaInvertida;
    }

    if (resultado) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }

   
}