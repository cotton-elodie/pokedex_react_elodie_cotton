import React from 'react'
import {Link} from 'react-router-dom'

const PokemonDetails = ({id, name, image, type, hp, base_stat, attack, defense, specialAttack, specialDefense, speed }) => {
    return (
        <div className={`details`}>
            <h2>Détails de {name}</h2>
            <div>
                <img src={image} alt={name} ></img>
                <div className={`details details-${name}`}>
                    <small>#{id} </small>
                    <h3>{name}</h3>
                    <Link to={`/${type}`}>{type}</Link>
                <h4>Statistiques </h4>
                <div className='details-row' >
                    <p>{hp}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>
                <div className='details-row' >
                    <p>{attack}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>
                <div className='details-row' >
                    <p>{defense}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>
                <div className='details-row' >
                    <p>{specialAttack}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>
                <div className='details-row' >
                    <p>{specialDefense}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>
                <div className='details-row' >
                    <p>{speed}</p>
                    <p>{base_stat}</p>
                    {/*mettre la jauge*/}
                </div>

                </div>
            </div>
     
        </div>
    )
}

export default PokemonDetails
