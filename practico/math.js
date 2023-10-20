console.group("Cuadrado") // Ayuda a organizar informacion en la consola inicio de bloque
// Cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
};
console.groupEnd("Cuadrado") // Ayuda a organizar informacion en la consola cierre de bloque
// Triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
};

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});
console.groupEnd("Triangulo")
// Circulo
console.group("Circulo")
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferenciaCirculo = diametroCirculo * PI;
const area = (radioCirculo ** 2) * PI;

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    return {
        diametro: radio * 2,
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
};

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferenciaCirculo,
    area,
});
console.groupEnd("Circulo")
