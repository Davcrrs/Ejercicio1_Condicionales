/*
let edad = 27;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}
*/

/*
alert('Selecciona el dispositivo: (Laptop | Television | Tablet)');
let dispositivo = prompt('Cómo quieres ver Netflix?');

if (dispositivo == 'laptop') {
    console.log('Abre la app de google y entra a Netflix.com');
} else if (dispositivo = 'television') {
    console.log('Presiona el boton rojo con el logo de Netflix');
} else if (dispositivo == 'tablet') {
    console.log('Descarga la app de Netflix e inicia sesión');
} else {
    console.log('No puedes ver Netflix en este dispositivo');
}
*/

/*
alert('Calculadora de areas -> TRIANGULO | CUADRADO | RECTANGULO <-');
let figura = prompt('Dame el nombre de la figura que calcularemos su área: ');

function areaTriangulo(trianguloBase, trianguloAltura) {
    return ((trianguloBase * trianguloAltura) / 2);
}

function areaCuadrado(cuadradoLado) {
    return (areaCuadrado*areaCuadrado);
}

function areaRectangulo(rectanguloBase, rectanguloAltura){
    return (rectanguloBase*rectanguloAltura);
}

if (figura == 'TRIANGULO' || figura === 'triangulo') {
    let trianguloBase = parseFloat(prompt('Dame la base del triángulo: '));
    let trianguloAltura = parseFloat(prompt('Dame la altura del triángulo: '));
    alert('El Area de tu triangulo es = ' + areaTriangulo(trianguloBase, trianguloAltura));
} else if (figura == 'CUADRADO' || figura == 'cuadrado') {
    let cuadradoLado = parseFloat(prompt('Dame el el lado de tu cuadrado: '));
    alert('El Area de tu cuadrado es = ' + areaCuadrado(cuadradoLado));
} else if (figura == 'RECTANGULO' || figura == 'rectangulo') {
    let rectanguloBase = parseInt(prompt('Dame la base del rectangulo: '));
    let rectanguloAltura = parseInt(prompt('Dame la altura del rectangulo: '))
    alert('El Área de tu rectángulo es = ' + areaRectangulo(rectanguloBase,rectanguloAltura));
}else {
    alert('El valor que ingresaste es incorrecto');
}
*/


/*
9. Escribe un programa que responda a un usuario que quiere comprar un 
helado en una conocida marca de comida rápida cuánto le costará en 
función del topping que elija.

El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, 
el programa le indicará “no tenemos este topping, lo sentimos.” 
y a continuación le informará el precio del helado sin ningún topping.
*/


/* HELADOS Y TOPPINGS */
alert('- Menú de helados -');
alert('Los precios son los siguientes:');
alert('Helado sin topping = $50.00 MXN');
alert('Topping de OREO + $10.00 MXN')
alert('Topping de KitKat + $15.00 MXN')
alert('Topping de Brownie + $20.00 MXN');

let topping = prompt('Elige el sabor del topping que gustes (Oreo, KitKat, Brownie)');

function saborDeHelado(helado, oreo) {
    return (helado + oreo);
}
function saborDeHeladoKit(helado, kitkat) {
    return (helado + kitkat);
}
function saborDeHeladoBro(helado, brownie) {
    return (helado + brownie);
}

if (topping == 'oreo' || topping == 'OREO' || topping == 'Oreo') {
    let helado = 50;
    let oreo = 10;
    alert('El total de tu helado es de: $' + saborDeHelado(helado, oreo));
}if (topping == 'kitkat' || topping == 'KitKat' || topping == 'KITKAT') {
    let helado = 50;
    let kitkat = 15;
    alert('El total de tu helado es de: $' + saborDeHelado(helado, kitkat));
}if (topping == 'brownie' || topping == 'Brownie' || topping == 'BROWNIE') {
    let helado = 50;
    let brownie = 20;
    alert('El total de tu helado es de: $' + saborDeHeladoBro(helado, brownie));
}else {
    alert('La opción seleccionada no es válida, intenta de nuevo.');
}
/* HELADOS Y TOPPINGS */