let num = parseInt(prompt("Ingrese un número:"));

if (num > 0 && num % 2 == 0){
    console.log("El número es par");
} else if (num > 0 && num % 2 !== 0) {
    console.log("El número es impar");
} else {
    console.log("Lo ingresado no es válido")
}