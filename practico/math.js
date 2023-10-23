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

function calcularAlturaTriangulo(lado, base) {
    if (lado == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        return altura = Math.sqrt((lado ** 2) - (base ** 2) / 4)
    }
}

function calcularAlturaEscaleno(lado1, lado2, lado3) {
    const semiperimetro = (lado1 + lado2 + lado3) / 2 ;
    if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return false;
    } else {
        let area = Math.sqrt(semiperimetro *(semiperimetro - lado1)*(semiperimetro - lado2)*(semiperimetro - lado3))
        let altura = Math.floor((2 / lado1) * area);
        return altura;
    }
}

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