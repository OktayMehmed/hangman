import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Gallow from "./components/Gallow";
import Word from "./components/Word";
import "./App.css";

const words = [
  "transcript",
  "jawbreaker",
  "fishhook",
  "flopping",
  "pneumonia",
  "syndrome",
  "grogginess",
];

const selectedWord = words[Math.floor(Math.random() * words.length)];

const firstLetter = selectedWord.charAt(0);
const lastLetter = selectedWord.charAt(selectedWord.length - 1);

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([])

  useEffect(() => {
    if (!correctLetters.includes(firstLetter) && !correctLetters.includes(lastLetter)) {
      setCorrectLetters((correctLetters) => [...correctLetters, firstLetter]);
      setCorrectLetters((correctLetters) => [...correctLetters, lastLetter]);
    }
  }, [correctLetters]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Gallow />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
