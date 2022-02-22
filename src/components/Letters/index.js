import React from 'react'
import './styles.css'

const Letters = ({ selectedWord, setLetters, alphabet, hideLetter, correctLetters, wrongLetters }) => {

  const handleLetterClick = (e) => {
    const btnValue = e.target.value;

    setLetters(btnValue)

    localStorage.setItem("selectedWord", selectedWord);
    localStorage.setItem("correctLetters", JSON.stringify(correctLetters));
    localStorage.setItem("wrongLetters", JSON.stringify(wrongLetters));
    localStorage.setItem("hideLetters", JSON.stringify(hideLetter));
  }

  return (
    <>
      <div className='letters'>
        {alphabet.map((letter, i) => (
          <button style={{ display: hideLetter.includes(letter) && "none" }} className='chars' key={i} onClick={handleLetterClick} value={letter}>{letter}</button>
        ))}
      </div>
    </>
  )
}

export default Letters