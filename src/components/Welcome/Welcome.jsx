import { useState, useEffect } from "react";
import Game from "../Game/Game.jsx";
import "./welcome.css";

export default function Welcome() {
  const [gameStart, setGameStart] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(false);

  useEffect(() => {
    if (gameStart) {
      document.body.style.backgroundImage = "url(./gameBackground.png)";
      setPlayerTurn(true);
    } else {
      document.body.style.backgroundImage = "url(./background.png)";
    }
  }, [gameStart]); // Run this effect only when gameStart changes

  return (
    <>
      {gameStart && (
        <Game playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
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
    </>
  );
}
