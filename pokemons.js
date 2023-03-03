function obtenerPokemon() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = [
                { nombre: 'Pikachu', tipo: 'Eléctrico' },
                { nombre: 'Bulbasaur', tipo: 'Planta' },
                { nombre: 'Charmander', tipo: 'Fuego' },
                { nombre: 'Squirtle', tipo: 'Agua' },
                { nombre: 'Caterpie', tipo: 'Bicho' },
                { nombre: 'Weedle', tipo: 'Bicho' },
            ];
            resolve(datos);
        }, 2000);
    });
}

module.exports = {
    obtenerPokemon
};