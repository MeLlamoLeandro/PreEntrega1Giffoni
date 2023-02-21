//Consigna
//Crear un algoritmo con un condicional.
//Crear un algoritmo utilizando un ciclo.
//Armar un simulador interactivo, la estructura final de tu proyecto integrador.

//declaro variables-constantes e ingreso los datos
const iva = 0.21;//impuesto valor agregado, se imputa sobre los intereses de cada cuota
const pmin = 12; //es el plazo minimo a calcular el credito
const pmax = 72;// es el plazo maximo a calcular el credito

//PIDO LOS DATOS POR PROMPT:
//let monto = parseInt(prompt("Por favor ingrese el monto a solicitar."));
//let plazo = parseInt(prompt("Por favor ingrese el plazo en meses.(12 min.-72 máx.)."));
//let tna = parseFloat(prompt("Por favor ingrese la Tasa Nominal Anual(T.N.A) en números. Ejemplo '10.5' --> 10.5% T.N.A'"));
let monto = 1000000;
let plazo = 12;
let tna = 96.5;
const tMensual = tna /100 /12;

//control de datos ingresados por consola
//controlo que la tasa y el monto ingresado sea >0
// controlo que el plazo sean entre 12 y 72 meses.
console.log('Simulando una serie de pagos para un crédito por: $'+ monto);
console.log("a devolver en un período de " + plazo + " meses");
console.log("con una tasa del %" + tna);

//CALCULO DE 1RA CUOTA
//--------------------
let saldoDeuda = monto;// en el primer pago es el equivalente a lo solicitado
const cuotaPura = monto * (tMensual * Math.pow(1 + tMensual, plazo)) / (Math.pow(1 + tMensual, plazo) - 1);
let interes = saldoDeuda * tMensual;
let capital = cuotaPura - interes;
const pagoIva = iva * interes;

let cuotaTotal = capital + interes + pagoIva;

console.log(saldoDeuda.toFixed(2),cuotaPura.toFixed(2),capital.toFixed(2),interes.toFixed(2),pagoIva.toFixed(2),cuotaTotal.toFixed(2));




