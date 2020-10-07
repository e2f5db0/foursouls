import React, { useState } from 'react'
import Button from './Button'
import goldBoxEdition from '../resources/goldboxedition.png'
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

const GoldBoxEdition = ({ setBody, playerCount }) => {

  const [playerCard, setPlayerCard] = useState(-1)
  const [alreadySelected, setAlreadySelected] = useState([])
  const [counter, setCounter] = useState(0)

  const handleRNG = () => {

    let newNumberFound = false
    while (newNumberFound === false) {
      let card = Math.floor(Math.random() * 14)
      if (!alreadySelected.includes(card)) {
        setPlayerCard(card)
        let newArray = alreadySelected
        newArray.push(card)
        setAlreadySelected(newArray)
        setCounter(counter+1)
        newNumberFound = true
      }
    }
  }

  const handleRoundEnd = () => {
    setBody('main')
    window.location.reload()
  }

  return (
    <div className='Container'>
      <img className='Edition-selection-img-heading' src={goldBoxEdition} alt='Gold Box Edition' />
      {playerCard === 0 && <img className='Player-Card' src={bluebaby} alt='Blue Baby' />}
      {playerCard === 1 && <img className='Player-Card' src={cain} alt='Cain' />}
      {playerCard === 2 && <img className='Player-Card' src={eden} alt='Eden' />}
      {playerCard === 3 && <img className='Player-Card' src={eve} alt='Eve' />}
      {playerCard === 4 && <img className='Player-Card' src={isaac} alt='Isaac' />}
      {playerCard === 5 && <img className='Player-Card' src={judas} alt='Judas' />}
      {playerCard === 6 && <img className='Player-Card' src={lazarus} alt='Lazarus' />}
      {playerCard === 7 && <img className='Player-Card' src={lilith} alt='Lilith' />}
      {playerCard === 8 && <img className='Player-Card' src={maggy} alt='Maggy' />}
      {playerCard === 9 && <img className='Player-Card' src={samson} alt='Samson' />}
      {playerCard === 10 && <img className='Player-Card' src={theforgotten} alt='The Forgotten' />}
      {playerCard === 11 && <img className='Player-Card' src={apollyon} alt='Apollyon' />}
      {playerCard === 12 && <img className='Player-Card' src={azazel} alt='Azazel' />}
      {playerCard === 13 && <img className='Player-Card' src={thekeeper} alt='The Keeper' />}
      {playerCard === 14 && <img className='Player-Card' src={thelost} alt='The Lost' />}
      {alreadySelected.length < playerCount && <Button type='Button-rng' text='RNG' handleClick={() => handleRNG()} />}
      {alreadySelected.length === playerCount && <Button type='Button-rng' text='Main Screen' handleClick={() => handleRoundEnd()} />}
    </div>
  )
}

export default GoldBoxEdition
