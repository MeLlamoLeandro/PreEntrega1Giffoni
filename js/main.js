//Consigna:
//---------
//Crear un algoritmo con un condicional.
//Crear un algoritmo utilizando un ciclo.
//Armar un simulador interactivo, la estructura final de tu proyecto integrador.
//----------------------------------------------------------------------------------------------
//https://www.icbc.com.ar/personas/productos-servicios/prestamos/personales

//Declaro constantes y variables GLOBALES del simulador.
const iva = 0.21;//impuesto valor agregado, se imputa sobre los intereses de cada cuota
const pmin = 12; //es el plazo minimo a calcular el credito
const pmax = 72;// es el plazo maximo a calcular el credito
let monto;
let plazo;
let tna;

//Inicio la variables pidiendo los datos por PROMPT.
//Controlo los datos ingresados. Validar si estan dentro de los parametros del simulador.

//monto = 1000000;
monto = parseInt(prompt("Por favor ingrese el monto a solicitar."));
while (monto <= 0) {
    monto = parseInt(prompt("Por favor ingrese un monto a solicitar mayor a 0 (cero)."));
}

//plazo = 12;
plazo = parseInt(prompt("Por favor ingrese el plazo en meses.(12 min.-72 máx.)."));
while ((plazo < 12) || (plazo > 72)){ 
    plazo = parseInt(prompt("Por favor ingrese el plazo en meses.(12 min.-72 máx.)."));
}    

//tna = 96.5;
tna = parseFloat(prompt("Por favor ingrese la Tasa Nominal Anual(T.N.A) en números. Ejemplo '10.5' --> 10.5% T.N.A'"));
while (tna <= 0){   
    tna = parseFloat(prompt("Por favor ingrese la (T.N.A) mayor a 0 (cero). Ejemplo '10.5' --> 10.5% T.N.A'"));
}


console.log('Simulando una serie de pagos para un crédito por: $'+ monto);
console.log("a devolver en un período de " + plazo + " meses");
console.log("con una tasa del " + tna + " %.");

//invoco la funcion
calcularPagos(monto,plazo,tna);

//------------------------------------------------------------------------
//armo la funcion
//Calculo la tasa mensual
function calcularPagos(monto,plazo,tna){
    const tMensual = tna /100 /12;
    const cuotaPura = monto * (tMensual * Math.pow(1 + tMensual, plazo)) / (Math.pow(1 + tMensual, plazo) - 1);
    let saldoDeuda = monto;// En el primer pago es el equivalente al importe solicitado
    let interes;
    let capital;
    let cuotaTotal;
    let i = 1;
    // Calculo los pagos mensuales
    for (let i = 1; i <= plazo; i++) {
        interes = saldoDeuda * tMensual;
        capital = cuotaPura - interes;
        const pagoIva = iva * interes;
        cuotaTotal = capital + interes + pagoIva;
        saldoDeuda = saldoDeuda - capital;
        //completarrrrrrrrrrrr estoooooooooooooooooooooooooooooo
        //poooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        if (mes === 1) {
            saldoDeuda = monto - capital;
          }
        // Muestro el resultado de cada cuota en consola redondeando a dos decimales
        console.log("Mes: " + i);
        console.log("Saldo Deuda: $" + saldoDeuda.toFixed(2));
        console.log("Cuota pura: $" + cuotaPura.toFixed(2));
        console.log("Capital: $" + capital.toFixed(2));
        console.log("Intereses: $" + interes.toFixed(2));
        console.log("IVA: $" + pagoIva.toFixed(2));
        console.log("Cuota Total: $" + cuotaTotal.toFixed(2));
        console.log("------------------------------------------");
    }
}