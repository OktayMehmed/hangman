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
  const [hideLetter, setHideLetter] = useState([]);

  useEffect(() => {
    selectedWord = localStorage.getItem("selectedWord") ? localStorage.getItem("selectedWord") : selectedWord
    firstLetter = selectedWord.split("").shift();
    lastLetter = selectedWord.split("").pop();

    const savedCorrectLetters = JSON.parse(localStorage.getItem("correctLetters")) ? JSON.parse(localStorage.getItem("correctLetters")) : []
    const savedWrongLetters = JSON.parse(localStorage.getItem("wrongLetters")) ? JSON.parse(localStorage.getItem("wrongLetters")) : []
    const savedHideLetters = JSON.parse(localStorage.getItem("hideLetters")) ? JSON.parse(localStorage.getItem("hideLetters")) : []

    savedCorrectLetters.map(letter => {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters([...correctLetters, letter])
      }
    })

    savedWrongLetters.map(letter => {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters([...wrongLetters, letter])
      }
    })

    savedHideLetters.map(letter => {
      if (!hideLetter.includes(letter)) {
        setHideLetter([...hideLetter, letter])
      }
    })

    if (!correctLetters.includes(firstLetter) && !correctLetters.includes(lastLetter)) {
      setCorrectLetters([...correctLetters, firstLetter, lastLetter]);
      setHideLetter([...hideLetter, firstLetter, lastLetter]);
    }

    if (selectedWord.includes(letters)) {
      if (!correctLetters.includes(letters)) {
        setCorrectLetters([...correctLetters, letters]);
        setHideLetter([...hideLetter, letters]);
      }
    } else {
      if (!wrongLetters.includes(letters)) {
        setWrongLetters([...wrongLetters, letters]);
        setHideLetter([...hideLetter, letters]);
      }
    }

  }, [correctLetters, letters, wrongLetters, hideLetter]);




  function playAgain() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setHideLetter([]);
    setLetters("")

    localStorage.removeItem("selectedWord");
    localStorage.removeItem("correctLetters");
    localStorage.removeItem("wrongLetters");
    localStorage.removeItem("hideLetters");

    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <ProgressBar wrongLetters={wrongLetters} />
        <Gallow wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Letters selectedWord={selectedWord} setLetters={setLetters} alphabet={alphabet}
          hideLetter={hideLetter}
          correctLetters={correctLetters}
          wrongLetters={wrongLetters} />
      </div>
      <Message correctLetters={correctLetters} wrongLetters={wrongLetters}
        selectedWord={selectedWord} playAgain={playAgain} />
    </>
  );
}

export default App;
