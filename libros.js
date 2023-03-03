function obtenerLibros(limit = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = [
                { nombre: 'Narnia', tipo: 'Fantasia' },
                { nombre: 'Harry Potter', tipo: 'Fantasia' },
                { nombre: 'El señor de los anillos', tipo: 'Fantasia' },
                { nombre: 'El principito', tipo: 'Fantasia' },
                { nombre: 'El hobbit', tipo: 'Fantasia'},
                { nombre: 'El alquimista', tipo: 'Fantasia' },
            ];
            if (datos.length >= limit) {
                resolve(datos.slice(0, limit)); // es como un return
            }
            reject("No hay suficientes datos");
        }, 3000);
    });
}

module.exports = {
    obtenerLibros
};