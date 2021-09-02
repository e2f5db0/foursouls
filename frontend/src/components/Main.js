import React from 'react'
import baseGame from '../resources/basegame.png'
import baseExpansion from '../resources/baseexpansion.png'
import goldBoxEdition from '../resources/goldboxedition.png'
import goldExpansion from '../resources/goldexpansion.png'
import arrowUp from '../resources/arrow-up.png'
import arrowDown from '../resources/arrow-down.png'

const Main = ({ setBody, playerCount, setPlayerCount }) => {

  const lowerPlayerCount = () => {
    if (playerCount > 2) {
      setPlayerCount(playerCount - 1)
    }
  }

  const increasePlayerCount = () => {
    if (playerCount < 6) {
      setPlayerCount(playerCount + 1)
    }
  }

  return (
    <div className='Container'>
      <div className='Playercount-flex'>
        <h2 className='Player-Count-Title'>Players: {playerCount}</h2>
        <div>
          <img className='Arrow-icon' src={arrowUp} alt='Arrow Up' onClick={() => increasePlayerCount()} />
          <br></br>
          <img className='Arrow-icon' src={arrowDown} alt='Arrow Down' onClick={() => lowerPlayerCount()} />
        </div>
      </div>
      <img className='Edition-selection-img' src={baseGame} alt='Base Game' onClick={() => setBody('baseGame')} />
      <img className='Edition-selection-img' src={baseExpansion} alt='Base & Expansion' onClick={() => setBody('baseExpansion')} />
      <img className='Edition-selection-img' src={goldBoxEdition} alt='Gold Box Edition' onClick={() => setBody('goldBoxEdition')} />
      <img className='Edition-selection-img' src={goldExpansion} alt='Gold & Expansion' onClick={() => setBody('goldExpansion')} />
    </div>
  )
}

export default Main
