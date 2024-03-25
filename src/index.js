import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return <Menu />;
}

function Menu() {
  return (
    <div className="start-menu">
      <h1 className="game-title">Welcome to BlackJack</h1>
      <p className="game-intro">To get started, click the "Start" button</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
