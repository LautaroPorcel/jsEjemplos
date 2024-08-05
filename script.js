document.addEventListener('DOMContentLoaded', function () {
    const searchNumber = document.getElementById('search-number');
    const searchButton = document.getElementById('search-button');
    const pokemonList = document.getElementById('pokemon-list');
    const pokemonDetails = document.getElementById('pokemon-details');

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    let allPokemon = [];

    async function loadPokemonData() {
        const response = await fetch(apiUrl + '?limit=1500');
        const data = await response.json();
        return data.results;
    }

    async function renderPokemonList(pokemonData) {
        pokemonList.innerHTML = '';
        for (const pokemon of pokemonData) {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>#${data.id}</h3>
                <p>${data.name}</p>
                <p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
            card.addEventListener('click', () => showPokemonDetails(data.id));
            pokemonList.appendChild(card);
        }
    }

    async function showPokemonDetails(number) {
        const response = await fetch(`${apiUrl}/${number}`);
        const data = await response.json();
        pokemonDetails.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>#${data.id}</p>
            <p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
        `;
        pokemonDetails.classList.add('show');
    }

    searchButton.addEventListener('click', async function () {
        const number = parseInt(searchNumber.value, 10);
        if (number && number > 0) {
            await showPokemonDetails(number);
        } else {
            pokemonDetails.innerHTML = '<p>Por favor, ingresa un número válido.</p>';
            pokemonDetails.classList.add('show');
        }
    });

    loadPokemonData().then(data => {
        allPokemon = data;
        renderPokemonList(allPokemon);
    });
});
