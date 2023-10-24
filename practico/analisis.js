console.log(salarios);

// Analisis personal para Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    // const persona = salarios.find((persona) => { // Otra manera de realizarlo.
    //     return persona.name == personaEnBusqueda;
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let index = 1; index < trabajos.length; index++) {
        const salarioActual = trabajos[index].salario;
        const salarioPasado = trabajos[index - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalario;

    return nuevoSalario;
}

const empresas = {};
for (const objeto of salarios) {
    for (const elemento of objeto.trabajos) {
        if (!empresas[elemento.empresa]) {
            empresas[elemento.empresa] = {};
        }

        if (!empresas[elemento.empresa][elemento.year]) {
            empresas[elemento.empresa][elemento.year] = [];    
        }

        empresas[elemento.empresa][elemento.year].push(elemento.salario);
    }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no existia ese year');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });

        let porcentajesCrecimiento = [];

        for (let index = 1; index < listaMedianaYears.length; index++) {
            const salarioActual = listaMedianaYears[index];
            const salarioPasado = listaMedianaYears[index - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumentoMediana = ultimoMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimoMediana + aumentoMediana;

        return nuevaMediana;
    }
}