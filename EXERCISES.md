## Ejercicio 1
Dado un número, crea una función que verifique si es primo. Un número es primo si es mayor que 1 y no tiene divisores aparte de 1 y él mismo.

## Ejercicio 2
Crea una función que calcule la diferencia entre el número más grande y el más pequeño en un arreglo de números.
let numeros = [3, 7, 1, 9, 4]

## Ejercicio 3
El sistema debe calcular la propina de una cuenta en un restaurante. Si el total de la cuenta es mayor a 50, se aplica una propina del 15%. Si es menor o igual a 50, se aplica una propina del 10%.

## Ejercicio 4  (interesante)
En un sistema de autenticación de usuarios, se requiere verificar si las credenciales ingresadas coinciden con las almacenadas. Si son correctas, el usuario obtiene acceso; si no, debe intentar de nuevo hasta un máximo de 3 intentos.
const usuariosRegistrados = [
{ usuario: "admin", contrasena: "1234" },
{ usuario: "user", contrasena: "abcd" }
];

## Ejercicio 5
Tienes un arreglo con las edades de un grupo de personas. El sistema necesita contar cuántas personas son menores de edad (menores de 18 años) y cuántas son adultas.
let edades = [12, 18, 25, 15, 30, 17];

## Ejercicio 6
En un restaurante, los pedidos se gestionan a través de un sistema en línea. Cada cliente realiza un pedido que contiene múltiples platos. Cada plato tiene un nombre y un precio. El sistema necesita calcular el total del pedido sumando el precio de todos los platos solicitados y aplicar un descuento del 15% si el total supera los $100. Si el total es menor o igual a $100, no se aplica ningún descuento.
let pedido = [
{ nombre: "Pizza", precio: 40 },
{ nombre: "Pasta", precio: 50 },
{ nombre: "Ensalada", precio: 20 }
];

## Ejercicio 7
En una sala de seguridad, se permite el acceso solo a los empleados que hayan autenticado correctamente. El sistema de acceso recibe una contraseña y debe verificar si coincide con las contraseñas almacenadas en el sistema. Sin embargo, los empleados tienen hasta 3 intentos antes de que su acceso sea bloqueado por seguridad.
let contraseñasValidas = ["admin123", "empleado456", "jefe789"]

## Ejercicio 8
El sistema necesita validar si una contraseña es segura. Para que la contraseña sea válida, debe tener al menos 8 caracteres, contener al menos una letra mayúscula y al menos un número.
Contraseña = "Password123"

## Ejercicio 9
Un sistema de reservas en línea para un hotel necesita verificar si hay habitaciones disponibles en el rango de fechas proporcionado por el usuario.
let habitaciones = [
{ numero: 101, disponible: true },
{ numero: 102, disponible: false },
{ numero: 103, disponible: true },
];

## Ejercicio 10
El sistema debe verificar si el código de promoción ingresado es válido. Los códigos válidos son: "PROMO10", "DESCUENTO20", y "AHORRO30".

## Ejercicio 11 (interesante)
En una aerolínea, el sistema de reservas debe verificar si hay asientos disponibles para un vuelo en una fecha específica.
let vuelos = [
{ vuelo: "A123", fecha: "2023-12-15", asientosDisponibles: 50 },
{ vuelo: "B456", fecha: "2023-12-15", asientosDisponibles: 0 },
{ vuelo: "C789", fecha: "2023-12-16", asientosDisponibles: 30 },
];