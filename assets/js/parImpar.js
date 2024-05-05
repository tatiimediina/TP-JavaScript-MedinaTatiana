let num = parseInt(prompt("Ingrese un número:"));

if (isNaN(num)) {
    console.log("Lo ingresado no es válido")
} else if (num % 2 === 0){
    console.log("El número es par");
} else if (num % 2 !== 0) {
    console.log("El número es impar");
} 