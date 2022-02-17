import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCards/PokemonCard';



const Home = (props) => {
    const [allPokemons, setAllPokemons] = useState([]);
	const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=21');

	const getAllPokemons = async () => {
		const response = await fetch(loadPokemons);
		const data = await response.json();
		// console.log(data);

		setLoadPokemons(data.next);

		function createPokemonItem(result) {
			result.forEach(async (pokemon) => {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await response.json();

				setAllPokemons((currentList) => [...currentList, data]);
			});
		}
		createPokemonItem(data.results);
	};
	console.log(allPokemons);
	useEffect(() => {
		getAllPokemons();
	}, []);
    return (
        <div>
            <div className="pokemon-container">
				{allPokemons.map((pokemon) => (
					<PokemonCard
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.name}
						image={pokemon.sprites.other.dream_world.front_default}
						type={pokemon.types[0].type.name}
					/>
				))}
			</div>
			<button className="load-more" onClick={() => getAllPokemons()}>
				load More
			</button>
        </div>
    )
}

export default Home
