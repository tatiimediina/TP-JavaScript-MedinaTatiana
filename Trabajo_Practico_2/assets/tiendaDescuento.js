let compraPrecio = parseInt(prompt("Ingrese el precio cada producto de su compra"));
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados:"));
if (isNaN(cantidadProductos) || isNaN(compraPrecio) || compraPrecio <= 0 || cantidadProductos <= 0 ){
    console.log("Ingrese números válidos por favor");
} else {
    let cantidadPagar = compraPrecio * cantidadProductos;
    console.log(`El precio total de la compra es: ${cantidadPagar}`);
    if (cantidadPagar >= 20000 && cantidadProductos >= 10){
        let descuento = cantidadPagar - (cantidadPagar*15/100);
        console.log(`El total a pagar con el descuento es ${descuento}`); 
    } else {
        console.log(`No se superó la cantidad de productos o el precio`);
    }
}
