function obtenerPeliculas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = [
                { nombre: 'Avengers', tipo: 'Accion', year : 2012 },
                { nombre: 'Batman', tipo: 'Accion', year : 2018 },
                { nombre: 'Spiderman', tipo: 'Accion', year : 2019 },
                { nombre: 'Superman', tipo: 'Accion', year : 2017 },
                { nombre: 'Ironman', tipo: 'Accion', year : 2015 },
                { nombre: 'Thor', tipo: 'Accion', year : 2016 },
                { nombre: 'Hulk', tipo: 'Accion', year : 2014},
                { nombre: 'Capitan America', tipo: 'Accion', year : 2013 },
            ];
            resolve(datos);
            // reject("Error en carga de peliculas.")
        }, 4000);
    });
}

module.exports = {
    obtenerPeliculas
};