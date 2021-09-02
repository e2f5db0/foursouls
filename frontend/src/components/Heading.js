import React from 'react'
import goldExpansion from '../resources/goldexpansion.png'
import baseGame from '../resources/basegame.png'
import baseExpansion from '../resources/baseexpansion.png'
import goldBoxEdition from '../resources/goldboxedition.png'

const Heading = ({ edition, setBody }) => {
    return (
        <div>
            {edition === 'baseGame' && <img onClick={() => setBody('main')} className='Edition-selection-img-heading' src={baseGame} alt='Base game' />}
            {edition === 'baseExpansion' && <img onClick={() => setBody('main')} className='Edition-selection-img-heading' src={baseExpansion} alt='Base game & Expansion' />}
            {edition === 'goldBoxEdition' && <img onClick={() => setBody('main')} className='Edition-selection-img-heading' src={goldBoxEdition} alt='Gold box edition' />}
            {edition === 'goldExpansion' && <img onClick={() => setBody('main')} className='Edition-selection-img-heading' src={goldExpansion} alt='Gold edition & Expansion' />}
        </div>
    )
}

export default Heading
