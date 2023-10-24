const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}
PlatziMath.esImPar = function esImPar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
   const listaCount = {};
   
   for (let index = 0; index < lista.length; index++) {
    const elemento = lista[index];

    if (listaCount[elemento]) {
        listaCount[elemento] += 1;
    } else {
        listaCount[elemento] = 1;
    }
   }
   
   const listaArray = Object.entries(listaCount);
   const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
   const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
// console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
   const moda = listaMaxNumber[0];
   return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
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

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarElements(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarElements);

    const promedio = sumaLista / lista.length;
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista; 
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];// Se coloca un indice [i] para que ordene con referencia al indice que se indique en la funcion.
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista; 
}