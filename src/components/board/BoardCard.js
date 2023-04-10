import React from 'react'
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';


const BoardCard = ({ active, user = "nouser", index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && user === "x" && "shadow-mint"} ${active && user === "o" && "shadow-orange"} ${active ? "active" : "shadow-pink"}`}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && <Xicon color={active && "orange"} size="lg" />}
      {user === "o" && <Oicon color={active && "orange"} size="lg" />}
    </div>
  );
};

export default BoardCard