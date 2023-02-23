//Declaro constantes y variables GLOBALES del simulador.
const iva = 0.21;//impuesto valor agregado, se imputa sobre los intereses de cada cuota
const pmin = 12; //es el plazo minimo a calcular el credito
const pmax = 72;// es el plazo maximo a calcular el credito
let monto;
let plazo;
let tna;

//Inicio la variables pidiendo los datos por PROMPT.
//Controlo los datos ingresados. Validar si estan dentro de los parametros del simulador.
monto = parseInt(prompt("Por favor ingrese el monto a solicitar."));
while (monto <= 0) {
    monto = parseInt(prompt("Por favor ingrese un monto mayor a 0 (cero)."));
}

plazo = parseInt(prompt("Por favor ingrese el plazo en meses.(12 min.-72 máx.)."));
while ((plazo < pmin) || (plazo > pmax)){ 
    plazo = parseInt(prompt("Por favor ingrese el plazo en meses.(12 min.-72 máx.)."));
}    

tna = parseFloat(prompt("Por favor ingrese la Tasa Nominal Anual(T.N.A) en números. Ejemplo '96.5' --> 96.5% T.N.A"));
while (tna <= 0){   
    tna = parseFloat(prompt("Por favor ingrese una T.N.A mayor a 0 (cero)."));
}

console.log('Simulando una serie de pagos para un crédito por: $'+ monto);
console.log("a devolver en un período de " + plazo + " meses");
console.log("con una tasa del " + tna + " %.");
console.log("------------------------------------------");

//------------------------------------------------------------------------
//Declaro la funcion
const calcularPagos = (monto,plazo,tna)=>{
    //Calculo la tasa mensual - declaro e inicio la constante de tasa mensual
    const tMensual = tna /100 /12;
    //Calculo la cuota pura a descomponer entre capital/interes con la constante cuotaPura
    const cuotaPura = monto * (tMensual * Math.pow(1 + tMensual, plazo)) / (Math.pow(1 + tMensual, plazo) - 1);
    //variables locales que uso en la funcion
    let saldoDeuda;
    let interes;
    let capital;
    let cuotaTotal;
    // Calculo los pagos mensuales desde el mes 1 al seleccionado con un bucle.
    for (let i = 1; i <= plazo; i++) {
        
        //segun investigue, para calcular la primera cuota, el Saldo de Deuda es el equivalente al Monto solicitado como en el simulador del ICBC y del BNA
        if (i === 1) {
            saldoDeuda = monto;
        }else{
            saldoDeuda = saldoDeuda - capital;
        }
        
        //Calculo el resto de los componentes de la cuota
        interes = saldoDeuda * tMensual;
        capital = cuotaPura - interes;
        const pagoIva = iva * interes;
        cuotaTotal = capital + interes + pagoIva;
        
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

//Invoco la funcion
calcularPagos(monto,plazo,tna);