"use strict";
//CREAN
function limpiarConsola(){
    console.clear();
}

//EJERCICIO 1
function isPrimoOrNot(number){
    let div = 0;
    for(let i=2; i<=number; i++){
        if((number%i)==0){ //iremos iterando hasta encontrar numeros que dividan y den residuo 0
            div++;  //contabilizamos un divisor cada vez que se encuentre un numero que de residuo cero
        }
    }
    if(div>1){ 
        alert(`El número ${number} no es primo`);
    }else{
        alert(`El número ${number} es primo`);
    }
}
function logic_1(number){
    let state = false;
    do{
        number = prompt("Ingrese ún numero para saber si es primo o no: ");
        if(number>1){
            isPrimoOrNot(number);
            state = false;
        }
        else{
            alert("El numero debe ser positivo");
            state = true;
        }
    }while(state);
}
const ejercicio_1 = () => {
    let number;
    logic_1(number);
}

//EJERCICIO 2
function logic_2(numeros){
    let max = -9999999 , min = 9999999;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]<min){
            min = numeros[i];
        }
        if(numeros[i]>max){
            max = numeros[i];
        }
    }
    return max - min;
}
function ejercicio_2(){
    let numeros = [3, 7, 1, 9, 4], diferencia;
    diferencia = logic_2(numeros); //8
    console.log(`La diferencia entre el mayor y menor número del arreglo ${numeros} es ${diferencia}`);
}

//EJERCICIO 3
function inputCuenta(){
    let cuenta= document.getElementById("cuenta");
    let miCuenta = Number(cuenta.value);
    return miCuenta;
}
const logic_3 = (cuenta) =>{
    let propina=0;
    if(cuenta>50){
        propina = cuenta * 0.15;
    }else{
        propina = cuenta * 0.10;
    }
    console.log(`Se calculó una propina de: ${propina}, total a pagar: ${cuenta+propina}`);
}
function ejercicio_3(){
    let cuenta = inputCuenta();
    logic_3(cuenta);
}

//EJERCICIO 4
const usuariosRegistrados = [
    { usuario: "admin", contrasena: "1234" },
    { usuario: "user", contrasena: "abcd" }
];

function logic_4(usuariosRegistrados, atemps) {
    let encontro = false;

    do {
        let u = prompt("Ingrese el usuario: ");
        let c = prompt("Ingrese la contraseña: ");

        const credencialesValidas = usuariosRegistrados.find(credencial => 
            credencial.usuario === u && credencial.contrasena === c
        );

        if (credencialesValidas) {
            console.log("Autenticacion completa. ¡Bienvenido!");
            encontro = true;
        } else {
            atemps++;
            
            console.log("Usuario o contraseña incorrectos.");
            console.log(`Intento N° ${atemps} de 3.`);
            
            if (atemps >= 3) {
                console.log("Se ha excedido el número máximo de intentos. Acceso bloqueado.");
            }
        }
    } while (encontro === false && atemps < 3);

    return encontro; 
}

function ejercicio_4() {
    let atemps = 0;
    logic_4(usuariosRegistrados, atemps);
}

//EJERCICIO 5
function logic_5(edades){
    let count=0;
    edades.forEach(element => {
        if(element<18){
            count++;
        }
    });
    console.log(count);
}
function ejercicio_5(){
    let edades = [12, 18, 25, 15, 30, 17];
    alert("Calculando edades de personas para saber cuales son adultas")
    logic_5(edades);
}

//EJERCICIO 6
function logic_6(pedido){
    let sum=0, desc = 0;
    pedido.forEach(element => {
        sum = sum + element.precio;
        if(sum >100){
            desc = sum * 0.15;
        }
    });
    console.log(sum - desc);
}
function ejercicio_6(){
    let pedido = [
        { nombre: "Pizza", precio: 40 },
        { nombre: "Pasta", precio: 50 },
        { nombre: "Ensalada", precio: 20 }
    ];
    logic_6(pedido);
}

//EJERCICIO 7
let atemps = 0;
let seBloquea = false; //sera true cuando pasemos el numero maxximo de atemps 3
const contraseniasValidas = ["admin123", "empleado456", "jefe789"];

const getAutenticator = () => {
    let password = document.getElementById("autentication");
    const valor = password.value;
    password.value = ""; // Aseguramos que el input se vacíe después de obtener el valor, para que el usuario ingrese la siguiente
    return valor;
}

function logic_7() {
    let myContra, autenticado = false;
    if (seBloquea) {
        console.log("Alcanzaste el numero maximo de intentos (3). Acceso bloqueado!");
    }
    myContra = getAutenticator();
    for (let i = 0; i < contraseniasValidas.length; i++) {
        if (myContra === contraseniasValidas[i]) {
            autenticado = true;
            break;
        }
    }
    if (autenticado) {
        console.log("Contraseña validada y verificada!");
        atemps = 0; 
        seBloquea = false;
    } else {
        atemps++; //modifica la variable global
        console.log(`Contraseña incorrecta. Intento N° ${atemps} de 3.`);

        if (atemps >= 3) {
            seBloquea = true;
            console.log("Acceso Bloqueado. Máximo de 3 intentos alcanzado.");
        }
    }
}
const ejercicio_7 = () => {
    logic_7();
}

//EJERCICIO 8
const getPassword = (password) => {
    password = document.getElementById("contrasenia");
    return password.value;
}
const logic_8 = (password) => {
    if(password.length <= 8){
        console.log("La contraseña debe tener al menos 8 caracteres");
    }else{
        console.log("La contraseña tiene al menos 8 caracteres");
        let lettersOfPassword = [];
        lettersOfPassword = password.split("");
        lettersOfPassword.forEach(element => {
            if(!(isNaN(element))){ //no es cierto que no haya un numero, es equivalente a que haya un numero dentro de esos elementos
                console.log(`contraseña con numero: ${element}`);
            }
        });
        // Una forma de averiguar si la contraseña tiene al menos un caracter en mayuscula , es creando una variable y guardar ahi la copia en minuscula y luego comparar con la contraseña ingresada , si son iguales es porque no hay mayuscula, pero si son diferentes es porque si hay al menos una mayuscula
        let passwordMinus = password.toLowerCase();
            if(password === passwordMinus){
                console.log("La contraseña ingresada debe tener al menos un caracter en Mayuscula!");
            }else{
                console.log("======== Contraseña Valida! =========");
            }
    }

}
const ejercicio_8 = () => {
    let password = "";
    password = getPassword();
    logic_8(password);
}

//EJERCICIO 9
function inputHabitacion(){
    let numHabitacion = document.getElementById("habitacion");
    return Number(numHabitacion.value);
}
function logic_9(habitaciones){
    let habitacionElegida = inputHabitacion();
    habitaciones.forEach(element => {
        if(element.numero == habitacionElegida){
            if(element.disponible){ // si la disponibilidad es true
                console.log(`La habitación ${element.numero} esta disponible`);
            }else{
                console.log(`La habitación ${element.numero} NO esta disponible`);
            }
        }
    });
}
function ejercicio_9(){
    let miHabitacion = "";
    let habitaciones = [
        { numero: 101, disponible: true },
        { numero: 102, disponible: false },
        { numero: 103, disponible: true },
    ];
    logic_9(habitaciones);
}

//EJERCICIO 10
const obteinCodes = () => {
    let mycode = document.getElementById("miCodigo");
    return mycode.value;
}
const logic_10 = (codigos) =>{
    let miCod = obteinCodes();

    codigos.forEach(element => { //funcion que ejecuta un bloque de instrucciones una vez por cada elemento del arreglo ingresado
        if(element == miCod){
            console.log(`Código ingresado: ${miCod} coincide con el codigo ${element} \nCODIGO VALIDO`);
        }
    });
}
const ejercicio_10 = () =>{
    const codigos = ["PROMO10", "DESCUENTO20", "AHORRO30"];
    logic_10(codigos);
}


//EJERCICIO 11
const obteinDate = () => { //funcion que retorna el objeto fecha del html, DOM 
    let optionDate = document.getElementById("miFecha");
    const objectValueDate = optionDate.valueAsDate;
    return objectValueDate;
}
const logic_11 = (vuelos) => {
    let myDate = obteinDate();

    if (!myDate){
        console.error("No se pudo obtener la fecha del elemento 'miFecha'.");
        return;
    }

    let dia = myDate.getDate() + 1; // Se asume que el +1 corrige el desfase de tiempo por zona horaria
    let mes = myDate.getMonth() + 1; // getMonth() es base 0 (0=Enero), se necesita +1
    let anio = myDate.getFullYear(); //esto no cambia . lo da exacto

    for (let i = 0; i < vuelos.length; i++) {
        const vueloActual = vuelos[i]; //cada vuelo se guarda en un objeto vuelo actual
        
        const dateParts = vueloActual.fecha.split("-"); //con split vamos a separar cada una de las fechas en 3 posiciones especificas 

        const anioVuelo = parseInt(dateParts[0]);   //2023
        const mesVuelo = parseInt(dateParts[1]);    //12
        const diaVuelo = parseInt(dateParts[2]);    //15 o 16

        if (anio === anioVuelo && mes === mesVuelo && dia === diaVuelo) { //si el año, mes y dia que ingresamos, es igual al año , mes y dia de los vuelos
            console.log(`Fecha disponible: ${vueloActual.fecha} para el vuelo: ${vueloActual.vuelo}`);
            if(vueloActual.asientosDisponibles == 0){
                console.log(`Asientos NO disponibles`);
            }else{
                console.log(`Asientos disponibles ${vueloActual.asientosDisponibles}`);
            }
        }
        if(anio != anioVuelo || mes != mesVuelo || dia != diaVuelo){ //solo para mostrar fechas inexistentes
            console.log("La fecha no esta disponible");
        }
    }

}
//Nota: no se pide el codigo de vuelo al inicio porque en una busqueda y disponibilidad, se busca por fechas y no por codigos de vuelos
function ejercicio_11() {
    let vuelos = [
        { vuelo: "A123", fecha: "2023-12-15", asientosDisponibles: 50 },
        { vuelo: "B456", fecha: "2023-12-15", asientosDisponibles: 0 },
        { vuelo: "C789", fecha: "2023-12-16", asientosDisponibles: 30 },
    ];
    logic_11(vuelos);
}