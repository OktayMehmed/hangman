import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Gallow from "./components/Gallow";
import Word from "./components/Word";
import Letters from "./components/Letters";
import ProgressBar from "./components/ProgressBar";
import Message from "./components/Message";
import "./App.css";

const words = [
  "transcript",
  "grogginess",
  "razzmatazz",
  "peekaboo",
  "cockiness"
];

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let firstLetter = selectedWord.split("").shift();
let lastLetter = selectedWord.split("").pop();

alphabet.length = selectedWord.length < 5 ? alphabet.length = 10 : selectedWord.length * 2;
alphabet = alphabet.filter(letter => letter !== firstLetter && letter !== lastLetter);

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([])
  const [letters, setLetters] = useState("");
  const [changeColor, setChangeColor] = useState([]);



  useEffect(() => {
    if (!correctLetters.includes(firstLetter) && !correctLetters.includes(lastLetter)) {
      setCorrectLetters((correctLetters) => [...correctLetters, firstLetter, lastLetter]);
      setChangeColor((changeColor) => [...changeColor, firstLetter, lastLetter]);
    }

    if (selectedWord.includes(letters)) {
      if (!correctLetters.includes(letters)) {
        setCorrectLetters((correctLetters) => [...correctLetters, letters]);
        setChangeColor((changeColor) => [...changeColor, letters]);
      }
    } else {
      if (!wrongLetters.includes(letters)) {
        setWrongLetters((wrongLetters) => [...wrongLetters, letters]);
        setChangeColor((changeColor) => [...changeColor, letters]);
      }
    }

  }, [correctLetters, letters, wrongLetters]);

  function playAgain() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setChangeColor([]);

    selectedWord = words[Math.floor(Math.random() * words.length)];
    firstLetter = selectedWord.split("").shift();
    lastLetter = selectedWord.split("").pop();

    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    alphabet.length = selectedWord.length < 5 ? alphabet.length = 10 : selectedWord.length * 2;
    alphabet = alphabet.filter(letter => letter !== firstLetter && letter !== lastLetter);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <ProgressBar wrongLetters={wrongLetters} />
        <Gallow wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Letters setLetters={setLetters} alphabet={alphabet} changeColor={changeColor} />
      </div>
      <Message correctLetters={correctLetters} wrongLetters={wrongLetters}
        selectedWord={selectedWord} playAgain={playAgain} />
    </>
  );
}

export default App;
