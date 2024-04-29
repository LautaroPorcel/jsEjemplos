function ejercicio7(){

    let txt =prompt("Ingrese texto")
   
    let result=mayusmin(txt);

    console.log (result);
 }
    function mayusmin(txt){
    let may = 0;
    let min = 0;
       
    for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i)== txt.charAt(i).toUpperCase()) {
        may++;    
    } else if (txt.charAt(i)== txt.charAt(i).toLowerCase()){
         min++;      
    }    

    }
if (may == 0) {
    return "son todas minusculas"
} else if (min == 0) {
    return "son todas mayusculas"
} else {
    return "son mayusculas y minusculas"
}
    }
