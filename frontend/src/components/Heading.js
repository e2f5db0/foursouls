import React from 'react'
import goldExpansion from '../resources/goldexpansion.png'
import baseGame from '../resources/basegame.png'
import baseExpansion from '../resources/baseexpansion.png'
import goldBoxEdition from '../resources/goldboxedition.png'

const Heading = ({ edition }) => {
    return (
        <div>
            {edition === 'baseGame' && <img className='Edition-selection-img-heading' src={baseGame} alt='Base game' />}
            {edition === 'baseExpansion' && <img className='Edition-selection-img-heading' src={baseExpansion} alt='Base game & Expansion' />}
            {edition === 'goldBoxEdition' && <img className='Edition-selection-img-heading' src={goldBoxEdition} alt='Gold box edition' />}
            {edition === 'goldExpansion' && <img className='Edition-selection-img-heading' src={goldExpansion} alt='Gold edition & Expansion' />}
        </div>
    )
}

export default Heading
