//FUNCIONES

// function esMayorEdad(edad){
//     if (edad>=18){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(esMayorEdad(18));

// function calcularAreaRectangulo(base, altura){
//     return (base*altura);
// }

// console.log(calcularAreaRectangulo(3,3));

// function generarNumeroAleatorio(){
//     return (Math.ceil(Math.random()*10));
// }
// console.log (generarNumeroAleatorio());

// let cadena="";
// let cadenaAlReves="";
// function esPalindromo(cadena){
//     cadenaAlReves = cadena.split("").reverse().join("");
//     if (cadenaAlReves == cadena){
//         return true;
//     } else { 
//         return false;
//     }
// }
// console.log(esPalindromo("radar"));

//ARREGLOS

// function obtenerSuma (arreglo){
//     let suma=0;
//     for (let i=0; i < arreglo.length; i++){
//         suma += arreglo[i];
//     }
//     return suma;
// }
// let arregloNumeros = [1,2,3,4,5]
// console.log(obtenerSuma(arregloNumeros));

// function obtenerPares(arreglo) {
//     let pares = [];
//     for (let i = 0; i <arreglo.length; i++){
//         if (arreglo[i]%2==0){
//             pares.push(arreglo[i]);
//         }
//     }
// return pares;
// }
// let numeros=[1,2,3,4,5,6,7,8,9,10];
// console.log(obtenerPares(numeros));

// function obtenerPromedioPonderado(notas, pesos) {
//     let sumaProductos = 0;
//     let sumaPesos = 0;
  
//     for (let i = 0; i < notas.length; i++) {
//       sumaProductos += notas[i] * pesos[i];
//       sumaPesos += pesos[i];
//   }
//   let promedioPonderado = sumaProductos / sumaPesos;
//   return promedioPonderado;
// }

// console.log(obtenerPromedioPonderado([8,9,10,6], [0.25, 0.25, 0.35, 0.15]));

// let numeros = [1,2,3,4,5];

// function obtenerMaximo (numeros){
//     let maximo = numeros[0];
//     for (let i = 1; i < numeros.length; i++) {
//         if (numeros[i] > maximo) {;
//             maximo = numeros[i];
//         }
//     }
// return maximo;
// }
// console.log(obtenerMaximo(numeros));

//OBJETOS

// let producto = {
//     nombre : "Papa",
//     precio: "20",
//     cantidad : "5",
// }
// function calcularTotal(producto){
//     return producto.precio * producto.cantidad;
// }
// let precioAPagar = calcularTotal(producto);
// console.log(precioAPagar);

// let persona = {
//     nombre : "Mauricio ",
//     edad: "23 años",
//     profesion: "Profesor"
// }
// function presentarPersona(persona){
//     return 
// }
// console.log("Los datos personales son:", persona);

// let persona = {
//     edad : 18,
// }
// function esMayorEdad(persona){
//     if (persona.edad>=18){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(esMayorEdad(persona))

// let numero = parseInt(prompt("Ingresa un número:"));

// function valorNumero(numero){
// if (numero > 0) {
//     return("El número es positivo.");
// } else if (numero < 0) {
//     return("El número es negativo.");
// } else {
//     return("El número es 0.");
// }
// }
// alert(valorNumero(numero));

// let numero = parseInt(prompt("Ingresa un número"));

// function numeroPrimo(numero){
//     if (numero % numero == 0){
//         return("El numero es primo");
//     } else {
//         return("El numero no es primo");
//     }
// }

// alert(numeroPrimo(numero));

// let temperatura = parseFloat(prompt("Ingrese la temperatura a convertir"));
// let tipo = prompt("Ingrese el tipo de temperatura para convertir: Celsius (C) o Farenheit (F)");


// function celsiusAFar(celsius){
//     let far = ( celsius * 9%5)+32;
//     return far;
// }

// function farACelsius(far){
//     let celsius =(far - 32)*5%9;
//     return celsius;
// }

// if (tipo.toUpperCase() == "C"){
//     far = celsiusAFar(temperatura);
//     alert(temperatura + " grados celsius equivalen en farenheit a: " + far);
// } else if 
//     (tipo.toUpperCase() == "F"){
//         celsius = farACelsius(temperatura);
//         alert(temperatura + " grados Farenheit equivalen en Celsius a: "+ celsius);
//     }

// let cantidadProd = parseInt(prompt("Ingrese la cantidad de productos que ha comprado"));
// let listaProd = [];
// for (let i = 0; i < cantidadProd; i++){
// let monto = parseFloat(prompt("Ingrese el monto de su producto "));
// listaProd.push(monto);
// }
// console.log(listaProd);

// let cantidadProd = parseInt(prompt("Ingrese la cantidad de productos que ha comprado"));
// let listaProd = [];

// for (let i = 0; i < cantidadProd; i++) {
//   let monto = parseFloat(prompt("Ingrese el monto de su producto."));
//   listaProd.push(monto);
// }
// console.log(listaProd);
// let consulta = prompt("Ha cargado todos sus productos ¿desea ver el total?Escriba 'total'");
// let suma = 0;
// if (consulta.toUpperCase() === "TOTAL") {
//   for (let i = 0; i < cantidadProd; i++) {
//     suma += listaProd[i];
//   }
// }
// console.log(suma);