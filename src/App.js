import React from "react";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import Modal from "./components/modal/Modal";
import Win from "./components/modal/Win";
import { GameContext } from "./context/GameContext";
import { useContext } from "react";



function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Start /> : <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
