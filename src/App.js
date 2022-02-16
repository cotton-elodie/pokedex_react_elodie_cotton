import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

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
		await console.log(allPokemons);
	};

	useEffect(() => {
		getAllPokemons();
	}, []);

	return <div className="App"></div>;
}

export default App;
