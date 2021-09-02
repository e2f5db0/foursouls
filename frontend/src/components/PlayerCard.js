import React from 'react'
import bluebaby from '../resources/bluebaby.png'
import cain from '../resources/cain.png'
import eden from '../resources/eden.png'
import eve from '../resources/eve.png'
import isaac from '../resources/isaac.png'
import judas from '../resources/judas.png'
import lazarus from '../resources/lazarus.png'
import lilith from '../resources/lilith.png'
import maggy from '../resources/maggy.png'
import samson from '../resources/samson.png'
import theforgotten from '../resources/theforgotten.png'
import apollyon from '../resources/apollyon.png'
import azazel from '../resources/azazel.png'
import thekeeper from '../resources/thekeeper.png'
import thelost from '../resources/thelost.png'
import bumbo from '../resources/bumbo.png'
import darkjudas from '../resources/darkjudas.png'
import guppy from '../resources/guppy.png'
import whoreofbabylon from '../resources/whoreofbabylon.png'

const PlayerCard = ({ cardNumber, handleClick }) => {
    return (
        <div>
            {
                // Base game 
            }
            {cardNumber === 0 && <img onClick={() => handleClick()} className='Player-Card' src={isaac} alt='Isaac' />}
            {cardNumber === 1 && <img onClick={() => handleClick()} className='Player-Card' src={cain} alt='Cain' />}
            {cardNumber === 2 && <img onClick={() => handleClick()} className='Player-Card' src={maggy} alt='Maggy' />}
            {cardNumber === 3 && <img onClick={() => handleClick()} className='Player-Card' src={judas} alt='Judas' />}
            {cardNumber === 4 && <img onClick={() => handleClick()} className='Player-Card' src={samson} alt='Samson' />}
            {cardNumber === 5 && <img onClick={() => handleClick()} className='Player-Card' src={eve} alt='Eve' />}
            {cardNumber === 6 && <img onClick={() => handleClick()} className='Player-Card' src={lilith} alt='Lilith' />}
            {cardNumber === 7 && <img onClick={() => handleClick()} className='Player-Card' src={bluebaby} alt='Blue Baby' />}
            {cardNumber === 8 && <img onClick={() => handleClick()} className='Player-Card' src={lazarus} alt='Lazarus' />}
            {cardNumber === 9 && <img onClick={() => handleClick()} className='Player-Card' src={theforgotten} alt='The Forgotten' />}
            {cardNumber === 10 && <img onClick={() => handleClick()} className='Player-Card' src={eden} alt='Eden' />}
            {
                // Gold Box
            }
            {cardNumber === 11 && <img onClick={() => handleClick()} className='Player-Card' src={thelost} alt='The Lost' />}
            {cardNumber === 12 && <img onClick={() => handleClick()} className='Player-Card' src={thekeeper} alt='The Keeper' />}
            {cardNumber === 13 && <img onClick={() => handleClick()} className='Player-Card' src={azazel} alt='Azazel' />}
            {cardNumber === 14 && <img onClick={() => handleClick()} className='Player-Card' src={apollyon} alt='Apollyon' />}
            {
                // Four Souls +
            }
            {cardNumber === 15 && <img onClick={() => handleClick()} className='Player-Card' src={guppy} alt='Guppy' />}
            {cardNumber === 16 && <img onClick={() => handleClick()} className='Player-Card' src={bumbo} alt='Bum-Bo' />}
            {cardNumber === 17 && <img onClick={() => handleClick()} className='Player-Card' src={whoreofbabylon} alt='Whore of Babylon' />}
            {cardNumber === 18 && <img onClick={() => handleClick()} className='Player-Card' src={darkjudas} alt='Dark Judas' />}
        </div>
    )
}

export default PlayerCard
