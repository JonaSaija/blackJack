import { useState } from "react";
import Game from "../Game/Game.jsx";
import "./welcome.css";

export default function Welcome() {
  const [gameStart, setGameStart] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);

  return (
    <div className={gameStart ? "backGroundGame" : "backGroundStart"}>
      {gameStart && (
        <Game playerTurn={playerTurn} handlePlayerTurn={setPlayerTurn} />
      )}
      {!gameStart && (
        <div className="startMenuContent" id="menuContent">
          <h1 className="game-title">Welcome to BlackJack</h1>
          <p className="game-intro">To get started, click the "Start" button</p>
          <button
            onClick={() => setGameStart(true)}
            className="start-button"
            type="button"
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
}
