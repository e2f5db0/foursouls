import React, { useState } from 'react'
import expansion from '../resources/expansion.png'
import goldBoxEdition from '../resources/goldboxedition.png'
import arrowUp from '../resources/arrow-up.png'
import arrowDown from '../resources/arrow-down.png'

const Main = ({ setBody, playerCount, setPlayerCount }) => {

  const lowerPlayerCount = () => {
    if (playerCount > 2) {
      setPlayerCount(playerCount-1)
    }
  }

  const increasePlayerCount = () => {
    if (playerCount < 6) {
      setPlayerCount(playerCount+1)
    }
  }

  return (
    <div className='Container'>
      <h1 className='Heading'>Player card selection</h1>
      <div className='Playercount-flex'>
        <h2>Players: {playerCount}</h2>
        <div>
          <img className='Arrow-icon' src={arrowUp} alt='Arrow Up' onClick={() => increasePlayerCount()} />
          <br></br>
          <img className='Arrow-icon' src={arrowDown} alt='Arrow Down' onClick={() => lowerPlayerCount()} />
        </div>
      </div>
      <h4>Choose the edition:</h4>
      <img className='Edition-selection-img' src={goldBoxEdition} alt='Gold Box Edition' onClick={() => setBody('goldBoxEdition')} />
      <img className='Edition-selection-img' src={expansion} alt='Expansion' onClick={() => setBody('expansion')} />
    </div>
  )
}

export default Main
