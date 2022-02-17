import React from 'react'
import '../PokemonCards/pokemonCard.scss'
import { Link } from "react-router-dom";
import PokemonDetails from '../PokemonDetails/PokemonDetails';

const PokemonCard = ({id, name, image, type}) => {

    return (
        <Link to={`/pokemon/${id}`}  className='pokemon-card'>
            <img src={image} alt={name} ></img>
            <div className='pokemon-detail'>
                
                <small>#{id} </small>
                <h3>{name}</h3>
                <small>Type : {type}</small>
            </div>
            <button>Détails </button>
        </Link>
    )
}

export default React.memo(PokemonCard)

