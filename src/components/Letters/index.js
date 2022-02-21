import React, { useState } from 'react'
import './styles.css'

const Letters = ({ setLetters, alphabet }) => {
  const [hideLetter, setHideLetter] = useState([]);

  const handleLetterClick = (e) => {
    const btnValue = e.target.value;

    setLetters(btnValue)
    setHideLetter((hideLetter) => [...hideLetter, btnValue])
  }

  return (
    <>
      <div className='letters'>
        {alphabet.map((letter, i) => (
          <button style={{display: hideLetter.includes(letter) && "none"}} className='chars' key={i} onClick={handleLetterClick} value={letter}>{letter}</button>
        ))}
      </div>
    </>
  )
}

export default Letters