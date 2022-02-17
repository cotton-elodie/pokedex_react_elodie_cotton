import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/:id" element={<PokemonDetails />}></Route>
			</Routes>
		</div>
	);
}

export default App;
