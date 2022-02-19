import React from "react";
import './styles.css'

const Gallow = () => {
  return (
    <>
      <article className="gallow-container">
        {false && <img src="/images/one.jpg" alt="hangman"/>}
        {false && <img src="/images/two.jpg" alt="hangman"/>}
        {false && <img src="/images/third.jpg" alt="hangman"/>}
        {false && <img src="/images/four.jpg" alt="hangman"/>}
        {false && <img src="/images/five.jpg" alt="hangman"/>}
        {false && <img src="/images/six.jpg" alt="hangman"/>}
        {false && <img src="/images/seven.jpg" alt="hangman"/>}
        {false && <img src="/images/eight.jpg" alt="hangman"/>}
        {false && <img src="/images/nine.jpg" alt="hangman"/>}
        {true && <img src="/images/ten.jpg" alt="hangman"/>}
      </article>
    </>
  );
};

export default Gallow;
