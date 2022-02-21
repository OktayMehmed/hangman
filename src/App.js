import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Gallow from "./components/Gallow";
import Word from "./components/Word";
import Letters from "./components/Letters";
import "./App.css";

const words = [
  "transcript",
  "grogginess",
  "razzmatazz",
  "flopping",
  "peekaboo",
  "cockiness"
];

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
const firstLetter = selectedWord.charAt(0);
const lastLetter = selectedWord.charAt(selectedWord.length - 1);

alphabet.length = selectedWord.length < 5 ? alphabet.length = 10 : selectedWord.length * 2;
alphabet = alphabet.filter(letter => letter !== firstLetter && letter !== lastLetter);

console.log(alphabet)

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([])
  const [letters, setLetters] = useState("");


  useEffect(() => {
    if (!correctLetters.includes(firstLetter) && !correctLetters.includes(lastLetter)) {
      setCorrectLetters((correctLetters) => [...correctLetters, firstLetter]);
      setCorrectLetters((correctLetters) => [...correctLetters, lastLetter]);
    }

    if (selectedWord.includes(letters)) {
      if (!correctLetters.includes(letters)) {
        setCorrectLetters((correctLetters) => [...correctLetters, letters]);
      }
    }

  }, [correctLetters, letters]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Gallow />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Letters setLetters={setLetters} alphabet={alphabet} />
      </div>
    </>
  );
}

export default App;
