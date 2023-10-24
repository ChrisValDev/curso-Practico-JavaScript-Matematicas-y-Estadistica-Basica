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