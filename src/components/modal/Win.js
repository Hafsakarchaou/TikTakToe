import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext.js";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>you win!</p>
          <h3
            className={`score__title ${
              winner === "o" ? "text-orange" : "text-mint"
            } `}
          >
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">No Winner !</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-sm" onClick={handleReset}>
          Quit
        </button>
        <button
          className={`btn   btn-sm ${
            winner === "x" ? "btn-orang" : "btn-mint "
          }`}
          onClick={handleNextRound}
        >
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;