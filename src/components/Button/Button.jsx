import React from 'react'
import {getAllPokemons} from '../App/App'

const Button = (props) => {

    return (
        <div className='load-more' >
            Load More
        </div>
    )
}

export default React.memo (Button)
