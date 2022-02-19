import "./App.css";
import Header from "./components/Header";
import Gallow from "./components/Gallow";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Gallow />
      </div>
    </>
  );
}

export default App;
