import React, { useState } from 'react'
import Button from './Button'

import whoami from '../resources/whoami.png'
import PlayerCard from './PlayerCard'
import Heading from './Heading'

const CardSelection = ({ setBody, playerCount, edition, cardLimit }) => {

  const [playerCard, setPlayerCard] = useState(-1)
  const [alreadySelected, setAlreadySelected] = useState([])
  const [counter, setCounter] = useState(0)
  const [showPlayerCard, setShowPlayerCard] = useState(false)

  const baseAllowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const baseExpansionAllowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18]
  const goldBoxEditionAllowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  const goldExpansionAllowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  const isValidEdition = (cardNumber) => {
    if (edition === 'baseGame' && baseAllowed.includes(cardNumber)) return true
    if (edition === 'baseExpansion' && baseExpansionAllowed.includes(cardNumber)) return true
    if (edition === 'goldBoxEdition' && goldBoxEditionAllowed.includes(cardNumber)) return true
    if (edition === 'goldExpansion' && goldExpansionAllowed.includes(cardNumber)) return true
    return false
  }

  const handleRNG = () => {
    setShowPlayerCard(false)
    let newNumberFound = false
    while (newNumberFound === false) {
      let card = Math.floor(Math.random() * 19)
      if (!alreadySelected.includes(card) && isValidEdition(card)) {
        setPlayerCard(card)
        let newArray = alreadySelected
        newArray.push(card)
        setAlreadySelected(newArray)
        setCounter(counter+1)
        newNumberFound = true
      }
    }
    setTimeout(() => {
      setShowPlayerCard(true)
    }, 250)
  }

  const handleRoundEnd = () => {
    setBody('main')
  }

  return (
    <div className='Container'>
      <Heading edition={edition} />
      <p className="Card-Count">{alreadySelected.length} / {playerCount}</p>
      {alreadySelected.length === 0 && <img className='Player-Card-Backside' src={whoami} alt='Character card backside' />}
      {showPlayerCard && <PlayerCard cardNumber={playerCard} />}
      <Button type='Button-rng' text={alreadySelected.length < playerCount ? 'Random' : 'Main Screen'} handleClick={alreadySelected.length < playerCount ? () => handleRNG() : () => handleRoundEnd()} />
    </div>
  )
}

export default CardSelection
