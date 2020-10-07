import React from 'react'
import loadingAnimation from '../resources/loading.gif'

const LoadingScreen = () => {
  return (
    <>
      <img className='Loading-animation' src={loadingAnimation} alt='loading animation' />
    </>
  )
}

export default LoadingScreen
