let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad > 0 & edad < 13) {
    console.log("Sos un niño");
} else if (edad >= 13 & edad < 20){
    console.log("Sos un adolescente");
} else if (edad >= 20 & edad < 60){
    console.log("Sos un adulto");
} else if (edad >= 60) {
    console.log("Sos un adulto mayor")
} else if (edad < 0 || typeof(edad) != String){
    console.log("Lo ingresado no es válido")
}