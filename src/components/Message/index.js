import React from 'react'
import './styles.css'

const Message = ({correctLetters, wrongLetters, selectedWord, playAgain}) => {
  let message = '';
  let status = 'win';

  selectedWord.split("").forEach(letter => {
    if(!correctLetters.includes(letter)){
      status = ""
    }
  });

  if(status === "win") {
    message = 'Congratulations!';
  } else if( wrongLetters.length === 10) {
    message = 'Game Over!';
  }

  return (
    <div className="message-container" style={message !== '' ? {display:'flex'} : {}}>
      <div className="message">
        <h2>{message}</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Message