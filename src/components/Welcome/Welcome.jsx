import { useState } from "react";
import Test from "../Dealer/Dealer.jsx";
import Game from "../Game/Game.jsx";
import "./welcome.css";

export default function Welcome() {
  const [gameStart, setGameStart] = useState(false);

  if (gameStart) {
    document.body.style.backgroundImage = "url(./gameBackground.png)";
  } else {
    document.body.style.backgroundImage = "url(./background.png)";
  }

  return (
    <>
      {gameStart && <Test startGame={gameStart} />}
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
