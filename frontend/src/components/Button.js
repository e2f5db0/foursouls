import React, { useState } from 'react'

const Button = ({ type, text, handleClick }) => {

    const [showButton, setShowButton] = useState(true)

    const hideTemporarily = () => {
        setShowButton(false)
        setTimeout(() => {
            setShowButton(true)
        }, 1000)
    }

    return (
        <div>
            {showButton && <button className={type} onClick={() => {handleClick(); hideTemporarily();}}>{text}</button>}
        </div>
    )
}

export default Button
