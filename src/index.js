import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./components/Welcome/Welcome.jsx";
const cardsData = [
  {
    name: "Ace's",
    worth: 11,
    image: "images/ace",
    amount: 4,
  },
  {
    name: "Queens",
    worth: 10,
    image: "images/queen",
    amount: 4,
  },
  {
    name: "Kings",
    worth: 10,
    image: "images/king",
    amount: 4,
  },
  {
    name: "Jacks",
    worth: 10,
    image: "images/jack",
    amount: 4,
  },
  {
    name: "10's",
    worth: 10,
    image: "images/10",
    amount: 4,
  },
  {
    name: "9's",
    worth: 9,
    image: "images/9",
    amount: 4,
  },
  {
    name: "8's",
    worth: 8,
    image: "images/8",
    amount: 4,
  },
  {
    name: "7's",
    worth: 7,
    image: "images/7",
    amount: 4,
  },
  {
    name: "6's",
    worth: 6,
    image: "images/6",
    amount: 4,
  },
  {
    name: "5's",
    worth: 5,
    image: "images/5",
    amount: 4,
  },
  {
    name: "4's",
    worth: 4,
    image: "images/4",
    amount: 4,
  },
  {
    name: "3's",
    worth: 3,
    image: "images/3",
    amount: 4,
  },
  {
    name: "2's",
    worth: 2,
    image: "images/2",
    amount: 4,
  },
];

function App() {
  return (
    <div>
      <Menu />
      <Game />
    </div>
  );
}

// Welcome
function Menu() {
  return (
    <div className="startMenuContent" id="menuContent">
      <h1 className="game-title">Welcome to BlackJack</h1>
      <p className="game-intro">To get started, click the "Start" button</p>
      <button onClick={startGame} className="start-button" type="button">
        Start
      </button>
    </div>
  );
}

// Menu
function Game() {
  return (
    <div className="startGameContent" id="gameContent">
      <button onClick={hitCard} className="hit-card-button" type="button">
        Hit
      </button>
      <button onClick={standCard} className="hit-card-button" type="button">
        Stand
      </button>
    </div>

    // <div className="startGameContent" id="gameContent">
    //   <Card image="images/10s.png" name="10s" value={10} />
    // </div>
  );
}

// Card
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-image" />
      <h2 className="card-name">{props.name}</h2>
      <h3 className="card-value">{props.value}</h3>
    </div>
  );
}

function startGame() {
  const menuContent = document.getElementById("menuContent");
  const gameContent = document.getElementById("gameContent");

  menuContent.style.display = "none";
  gameContent.style.display = "block";
}

function hitCard() {}

function standCard() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
