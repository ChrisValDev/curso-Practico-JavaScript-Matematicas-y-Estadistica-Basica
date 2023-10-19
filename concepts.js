
// Aquí tienes una lista de todos los métodos disponibles en el objeto Math en JavaScript:

// Métodos trigonométricos:

// Math.sin(x): Devuelve el seno de x (en radianes).
// Math.cos(x): Devuelve el coseno de x (en radianes).
// Math.tan(x): Devuelve la tangente de x (en radianes).
// Math.asin(x): Devuelve el arco seno de x (en radianes).
// Math.acos(x): Devuelve el arco coseno de x (en radianes).
// Math.atan(x): Devuelve el arco tangente de x (en radianes).
// Math.atan2(y, x): Devuelve el arco tangente del cociente y / x (en radianes).

// Métodos exponenciales y logarítmicos:

// Math.exp(x): Devuelve e^x, donde e es la base del logaritmo natural.
// Math.log(x): Devuelve el logaritmo natural de x.
// Math.log10(x): Devuelve el logaritmo en base 10 de x.
// Math.log2(x): Devuelve el logaritmo en base 2 de x.
// Math.pow(base, exponente): Eleva base a la potencia exponente.

// Métodos de redondeo:

// Math.round(x): Redondea x al entero más cercano.
// Math.floor(x): Redondea x al entero menor o igual más cercano.
// Math.ceil(x): Redondea x al entero mayor o igual más cercano.
// Math.trunc(x): Devuelve la parte entera de x (elimina la parte decimal).

// Métodos de valor absoluto:

// Math.abs(x): Devuelve el valor absoluto de x.

// Métodos de generación de números aleatorios:

// Math.random(): Devuelve un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).

// Métodos de constantes matemáticas:

// Math.PI: Devuelve el valor de π (pi).
// Math.E: Devuelve la constante de Euler (e).
// Métodos de operaciones matemáticas adicionales:

// Math.min(x1, x2, ..., xn): Devuelve el valor más bajo entre los argumentos proporcionados.
// Math.max(x1, x2, ..., xn): Devuelve el valor más alto entre los argumentos proporcionados.
// Math.sqrt(x): Devuelve la raíz cuadrada de x.
// Math.cbrt(x): Devuelve la raíz cúbica de x.
// Estos son los métodos disponibles en el objeto Math en JavaScript para realizar diversas operaciones matemáticas. Puedes utilizar estos métodos para llevar a cabo cálculos matemáticos en tus programas.

// Math.pow
// El método Math.pow es una función en JavaScript que se utiliza para elevar un número a una potencia especificada. Aquí tienes una descripción más detallada:

Math.pow(base, exponente)

var resultado = Math.pow(2, 3); // Esto elevará 2 a la potencia 3
console.log(resultado); // El resultado será 8

//Math.PI
// Math.PI es una propiedad en JavaScript que almacena el valor de la constante matemática π (pi). Pi es una constante fundamental en matemáticas y se utiliza comúnmente en cálculos geométricos y trigonométricos. El valor de π es aproximadamente 3.141592653589793, aunque Math.PI proporciona un valor más preciso. Puedes acceder al valor de π en JavaScript de la siguiente manera:

var pi = Math.PI;
console.log(pi); // Esto mostrará el valor de π en la consola

// Esta constante es útil para realizar cálculos matemáticos que involucran círculos, ángulos y otras operaciones matemáticas que requieren el valor de π.

//Math.sqrt
//Math.sqrt es un método en JavaScript que se utiliza para calcular la raíz cuadrada de un número. Este método toma un solo argumento, que es el número del cual deseas calcular la raíz cuadrada. La raíz cuadrada es el número que, cuando se multiplica por sí mismo, produce el número original.

Math.sqrt(x)

var numero = 25;
var raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada); // Esto mostrará la raíz cuadrada de 25, que es 5

// El método reduce() es una función de orden superior en JavaScript que se utiliza para reducir los elementos de un array a un solo valor. Puedes utilizarlo para realizar operaciones de agregación en un array, como sumar todos los elementos, encontrar el valor máximo o mínimo, o realizar cualquier otra operación personalizada en los elementos del array.
// Aquí tienes un ejemplo de cómo utilizar reduce() para sumar todos los elementos de un array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Esto imprimirá 15, que es la suma de todos los elementos del array.

// En este ejemplo:

// Creamos un array llamado numbers que contiene algunos números.
// Luego, llamamos a numbers.reduce(), pasando una función como argumento.
// La función que pasamos toma dos parámetros: accumulator y currentValue. accumulator es el valor acumulado actual y currentValue es el valor del elemento actual del array.
// En la función, simplemente sumamos el accumulator y el currentValue y retornamos el resultado.
// El segundo argumento pasado a reduce es el valor inicial del accumulator, en este caso, 0. Esto es opcional y se utiliza para establecer un valor inicial para la acumulación.
// Después de ejecutar reduce(), el resultado se almacena en la variable sum y se imprime en la consola.

// Puedes utilizar reduce() de manera similar para realizar otras operaciones de agregación en arrays. Solo necesitas ajustar la función pasada a reduce() según lo que desees lograr.


// Operador de modulo
// El operador % se llama "operador de módulo". Es un operador matemático que se utiliza para calcular el residuo de la división entre dos números. En JavaScript y en muchos otros lenguajes de programación, se representa con el símbolo %. Por ejemplo, a % b calcula el residuo de la división de a entre b. El operador de módulo es útil para diversas tareas, como determinar si un número es par o impar, ciclos de repetición, y cálculos que involucran patrones cíclicos.

// //Object y sus metodos

// El objeto Object en JavaScript tiene varios métodos que se pueden usar para realizar diversas operaciones en objetos. Aquí tienes una lista de algunos de los métodos más comunes de Object con una breve descripción de cada uno:

// Object.keys(obj): Retorna un array con todas las claves (propiedades) de un objeto.

// Object.values(obj): Retorna un array con los valores de todas las propiedades de un objeto.

// Object.entries(obj): Retorna un array de arrays (pares clave-valor) que representan todas las propiedades de un objeto.

// Object.assign(target, ...sources): Copia las propiedades de uno o más objetos (sources) al objeto de destino (target) y retorna el objeto de destino modificado.

// Object.create(proto, [propertiesObject]): Crea un nuevo objeto con el objeto proto como prototipo y, opcionalmente, define nuevas propiedades en el objeto creado utilizando propertiesObject.

// Object.freeze(obj): Hace que un objeto sea inmutable, es decir, sus propiedades no se pueden modificar, agregar o eliminar.

// Object.seal(obj): Hace que un objeto sea sellado, lo que significa que sus propiedades existentes no pueden ser eliminadas y tampoco se pueden agregar nuevas propiedades, pero los valores de las propiedades existentes aún se pueden modificar.

// Object.is(obj1, obj2): Compara dos objetos para determinar si son iguales. A menudo se utiliza para comparar objetos y evitar problemas de igualdad por referencia.

// Object.hasOwnProperty(prop): Verifica si un objeto tiene una propiedad específica, retornando un valor booleano.

// Object.getOwnPropertyNames(obj): Retorna un array con los nombres de todas las propiedades del objeto, incluyendo las propiedades no-enumerables.

// Object.getOwnPropertyDescriptor(obj, prop): Retorna un objeto que describe la propiedad especificada, incluyendo su configuración (por ejemplo, si es configurable, enumerable, etc.).

// Object.getPrototypeOf(obj): Retorna el prototipo del objeto dado, es decir, el objeto del cual hereda propiedades y métodos.

// Object.toString(): Retorna una representación en cadena del objeto, generalmente su tipo y valor.

// Object.isPrototypeOf(obj): Verifica si un objeto es el prototipo de otro objeto.

// Object.hasOwnProperty(): Determina si un objeto tiene una propiedad específica directamente en sí mismo (no en su cadena de prototipos).

// Object.getOwnPropertySymbols(obj): Retorna un array con todos los símbolos propios (propiedades con claves de tipo Symbol) de un objeto.

// Estos son algunos de los métodos más comunes de Object en JavaScript. Cada uno tiene un propósito específico y se utiliza en diferentes situaciones para trabajar con objetos.