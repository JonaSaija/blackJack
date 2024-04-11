import StartGame from "./startGame";

export default function Menu() {
  return (
    <div className="startMenuContent" id="menuContent">
      <h1 className="game-title">Welcome to BlackJack</h1>
      <p className="game-intro">To get started, click the "Start" button</p>
      <button onClick={StartGame} className="start-button" type="button">
        Start
      </button>
    </div>
  );
}
