let nombreUsuario = prompt("Ingrese Nombre y Apellido")
alert("Hola " + nombreUsuario + ".")

const ProductoA = 10000
const ProductoB = 20000
const ProductoC = 25000

let cantidad; 
let nombreProducto;
let resultado;
let costoTotal;

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingrese la cantidad del Producto que desea comprar. Recuerde que 0 (cero), finaliza el proceso"));
    
    if (cantidad === 0){
        break;
    }

nombreProducto = prompt("Ingrese el producto que desea comprar:\n1- Si quiere el Producto A ingrese = A \n2- Si quiere el Producto B ingrese = B \n3- Si quiere el Producto C ingrese = C").toUpperCase();

switch (nombreProducto){
    case "A":
        resultado = multiplicar(ProductoA, cantidad);
        alert("Debe abonar $"+ resultado + " para comprar el Producto A");
        break;
    case "B":
        resultado = multiplicar(ProductoB, cantidad);
        alert("Debe abonar $"+ resultado + " para comprar el Producto B");
        break;
    case "C":
        resultado = multiplicar(ProductoC, cantidad);
        alert("Debe abonar $ "+ resultado+ " para comprar el Producto C");
        break;
    default:
        alert("No es posible realizar esta accion, indicar letra correspondiente del Producto que quiere comprar");
        break;
}

if (cantidad >= 5 ){
    costoDeEnvio = 0
    alert("El costo de envio esta bonificado"+ costoDeEnvio);
}
else if (cantidad <5 && cantidad >=3){
    costoDeEnvio = 5000
    alert("El costo de envio es $"+ costoDeEnvio);
}
else if (cantidad >=1 && cantidad <3) {
    costoDeEnvio = 8000
    alert("El costo de envio es $"+ costoDeEnvio);
}

//operacion Suma Total
function sumaTotal (resultado, costoDeEnvio){
    const costoTotal = resultado + costoDeEnvio;
    return costoTotal;
}

let costoTotal= sumaTotal(resultado, costoDeEnvio);
alert (nombreUsuario + " tu monto total a pagar es de " + costoTotal + ".");
break;
}