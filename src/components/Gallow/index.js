import React from "react";
import './styles.css'

const Gallow = ({wrongLetters}) => {

  return (
    <>
      <article className="gallow-container">
        {wrongLetters.length >= 1 && wrongLetters.length < 2 && <img src="/images/one.jpg" alt="hangman"/>}
        {wrongLetters.length >= 2 && wrongLetters.length < 3 && <img src="/images/two.jpg" alt="hangman"/>}
        {wrongLetters.length >= 3 && wrongLetters.length < 4 && <img src="/images/third.jpg" alt="hangman"/>}
        {wrongLetters.length >= 4 && wrongLetters.length < 5 && <img src="/images/four.jpg" alt="hangman"/>}
        {wrongLetters.length >= 5 && wrongLetters.length < 6 && <img src="/images/five.jpg" alt="hangman"/>}
        {wrongLetters.length >= 6 && wrongLetters.length < 7 && <img src="/images/six.jpg" alt="hangman"/>}
        {wrongLetters.length >= 7 && wrongLetters.length < 8 && <img src="/images/seven.jpg" alt="hangman"/>}
        {wrongLetters.length >= 8 && wrongLetters.length < 9 && <img src="/images/eight.jpg" alt="hangman"/>}
        {wrongLetters.length >= 9 && wrongLetters.length < 10 && <img src="/images/nine.jpg" alt="hangman"/>}
        {wrongLetters.length >= 10 && <img src="/images/ten.jpg" alt="hangman"/>}
      </article>
    </>
  );
};

export default Gallow;
