// Ejercicio 1
function convertirAString(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        return 'No es un número válido';
    }
    return numero.toString();
}

// Ejercicio 2
function getElementoEnPosicion(array, indice) {
    if (!Array.isArray(array) || indice < 0 || indice >= array.length) {
        return 'Índice fuera de rango';
    }
    return array[indice];
}

// Ejercicio 3 (repetido)
function convertirAString(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        return 'No es un número válido';
    }
    return numero.toString();
}

// Ejercicio 4
function calcularAreaTriangulo(base, altura) {
    if (base <= 0 || altura <= 0) {
        return 'Base o altura negativa';
    }
    return (base * altura) / 2;
}

// Ejercicio 5
function operacionConArchivo() {
    let archivo = abrirArchivo();
    try {
        // Realizar operación con el archivo
    } catch (error) {
        console.error('Error durante la operación:', error);
    } finally {
        if (archivo) {
            cerrarArchivo(archivo);
        }
    }
}

// Ejercicio 6
function operacionMatematicaCompleja() {
    try {
        // Realizar operación matemática compleja
    } catch (error) {
        console.error('Error en la operación matemática compleja:', error);
        throw error;
    }
}

function otraFuncion() {
    try {
        operacionMatematicaCompleja();
    } catch (error) {
        console.error('Error al llamar a operacionMatematicaCompleja:', error);
    }
}

otraFuncion();