import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import "./menu.css";
import "../../index.js";

export default function Game() {
  const [randomImgIndex, setRandomImgIndex] = useState(0);
  const [randomCardIndex, setRandomCardIndex] = useState(0);
  const [cardImg, setCardImg] = useState(0);

  const cardsData = [
    {
      name: "Ace",
      worth: 11,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/Ace.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/Ace.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/Ace.png"
          : "FinishedCards/JavaScriptCards/Ace.png",
      amount: 4,
    },
    {
      name: "Queen",
      amount: 4,
      worth: 10,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/Queen.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/Queen.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/Queen.png"
          : "FinishedCards/JavaScriptCards/Queen.png",
    },
    {
      name: "King",
      worth: 10,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/King.png"
          : cardImg === 2
          ? " FinishedCards/CssCards/King.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/King.png"
          : "FinishedCards/JavaScriptCards/King.png",
      amount: 4,
    },
    {
      name: "Jack",
      worth: 10,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/Jack.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/Jack.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/Jack.png"
          : "FinishedCards/JavaScriptCards/Jack.png",
      amount: 4,
    },
    {
      name: "Ten",
      worth: 10,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/10.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/10.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/10.png"
          : "FinishedCards/JavaScriptCards/10.png",
      amount: 4,
    },
    {
      name: "Nine",
      worth: 9,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/9.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/9.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/9.png"
          : "FinishedCards/JavaScriptCards/9.png",
      amount: 4,
    },
    {
      name: "Eight",
      worth: 8,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/8.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/8.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/8.png"
          : "FinishedCards/JavaScriptCards/8.png",
      amount: 4,
    },
    {
      name: "Seven",
      worth: 7,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/7.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/7.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/7.png"
          : "FinishedCards/JavaScriptCards/7.png",
      amount: 4,
    },
    {
      name: "Six",
      worth: 6,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/6.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/6.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/6.png"
          : "FinishedCards/JavaScriptCards/6.png",
      amount: 4,
    },
    {
      name: "Five",
      worth: 5,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/5.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/5.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/5.png"
          : "FinishedCards/JavaScriptCards/5.png",
      amount: 4,
    },
    {
      name: "Four",
      worth: 4,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/4.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/4.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/4.png"
          : "FinishedCards/JavaScriptCards/4.png",
      amount: 4,
    },
    {
      name: "Three",
      worth: 3,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/3.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/3.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/3.png"
          : "FinishedCards/JavaScriptCards/3.png",
      amount: 4,
    },
    {
      name: "Two",
      worth: 2,
      image:
        cardImg === 1
          ? "FinishedCards/C#Cards/2.png"
          : cardImg === 2
          ? "FinishedCards/CssCards/2.png"
          : cardImg === 3
          ? "FinishedCards/HtmlCards/2.png"
          : "FinishedCards/JavaScriptCards/2.png",
      amount: 4,
    },
  ];

  function clickHandler() {
    const newRandomIndex = Math.floor(Math.random() * cardsData.length);
    setRandomCardIndex(newRandomIndex);

    const randomImgGen = Math.floor(Math.random() * 4);
    setRandomImgIndex(randomImgGen);
    setCardImg(randomImgIndex);
  }

  return (
    <div className="startGameContent" id="gameContent">
      <Card
        image={cardsData[randomCardIndex].image}
        value={cardsData[randomCardIndex].worth}
        name={cardsData[randomCardIndex].name}
      />
      <button onClick={clickHandler} className="hit-card-button" type="button">
        Hit
      </button>
      <button className="hit-card-button" type="button">
        Stand
      </button>
    </div>
  );
}
