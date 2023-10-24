function esPar(lista) {
    return !(lista.length % 2);
}
function esImPar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function calcularPromedio(lista) {
    function sumarElements(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElements);

    const promedio = sumaLista / lista.length;
    return promedio;
};