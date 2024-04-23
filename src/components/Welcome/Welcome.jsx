import { useState } from "react";
import Game from "../Game/Game.jsx";
import "./welcome.css";

export default function Welcome() {
  const [gameStart, setGameStart] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    if (gameStart) {
      document.body.style.backgroundImage = "url(./gameBackground.png)";
      document.body.style.height = "100vh";
      document.body.style.backgroundSize = "none";
      document.body.style.backgroundRepeat = "repeat";
    } else {
      document.body.style.backgroundImage = "url(./background.png)";
    }
  }, [gameStart]); // Run this effect only when gameStart changes

  return (
    <>
      {gameStart && <Game />}
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
