let listaNumber = [1,2,3,4,5,6];

function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
    // }

    function sumarElements(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElements);

    const promedio = sumaLista / lista.length;
    return promedio;
};