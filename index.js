const { obtenerPokemon } = require('./pokemons');
const { obtenerPeliculas } = require('./peliculas');
const { obtenerLibros } = require('./libros');


obtenerPokemon()
    .then((data) => {
        let pokemonsMayusculas = [];
        data.forEach(pokemon => {
            pokemonsMayusculas.push({ nombre: pokemon.nombre.toUpperCase() });
            // pokemonsMayusculas.push(pokemon.nombre.toUpperCase());
        });
        // console.log(pokemonsMayusculas);
        // Podria hacer esto con un map... como quedaria.....
    })
    .catch((error) => {
        // console.log(error)
    })
    .finally(() => {
        // console.log("Entro al finally")
    });


obtenerPeliculas()
    .then((data) => {
        // console.log(data, "Success");
    })
    .catch((error) => {
        // console.log(error);
    });

obtenerLibros(5)
    .then((data) => {
        // console.log("Libros success");
        // console.log(data);
    })
    .catch((error) => {
        // console.log("Libros error");
        // console.log(error);
    });

Promise.all(
    [
        obtenerPokemon(), //4s
        obtenerPeliculas(), //2s
        obtenerLibros(7) // 1min
    ]
)
    .then((data) => {
        // console.log(data[0], "Pokemon");
        // console.log(data[1], "Peliculas");
        // console.log(data[2], "Libros");
        // console.log("Se resolvieron todas las promesas");
    })
    .catch((error) => {
        // console.log(error);
        // console.log("No se pudieron resolver todas las promesas");
    });


(async () => {
    try {
        // cualquier error que ocurra entraria en el catch....
        console.log("Entro a funcion anonima");
        let pokemons = await obtenerPokemon();
        // es como si fuera el then...
        // no llega aqui SI NO TIENE YA POKEMONS
        pokemons = pokemons.map((pokemon)=> {
            pokemon.nombre = pokemon.nombre.toUpperCase()
            return pokemon
        });
        // const peliculas = await obtenerPeliculas();
        // const libros = await obtenerLibros(5);
        // console.log([...pokemons, ...peliculas, ...libros]);
        console.log(pokemons);
    } catch (error) {
        console.log(error, "Entro en el catch....");
    }
})();

/*

function start() {
    console.log("Entro a funcion anonima");
}

start();

*/