function esPar(lista) {
    return !(lista.length % 2);
}
function esImPar(lista) {
    return lista.length % 2;
}

function calcularModa(lista) {
   const listaCount = {};
   
   for (let index = 0; index < lista.length; index++) {
    const elemento = lista[index];

    if (listaCount[elemento]) {
        listaCount[elemento] += 1;
    } else {
        listaCount[elemento] = 1;
    }
   }
   console.log(listaCount);
}

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
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
}

function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }
        return valorAcumulado - nuevoValor;
        // return 10 - 5 -> 5;
        // return 5 - 5 -> 0;
        // return 5 - 10 -> -5;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista; 
}