import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import "./game.css";
import "../../index.js";
// import DealerContent from "../Dealer/Dealer.jsx";
import cardsData from "../../data/cards.js";

export default function Game() {
  const [randomCardIndex, setRandomCardIndex] = useState(null);
  const [openCards, setOpenCards] = useState([]);
  const [totalCardValue, setTotalCardValue] = useState(0);
  const [cards, setCards] = useState(cardsData);
  const [dealersTurn, setDealersTurn] = useState(false);

  function clickHitHandler() {
    //Making a random index for the random card draw
    const newRandomIndex = Math.floor(Math.random() * cards?.length);
    setRandomCardIndex(newRandomIndex);

    //Setting the random card that you hit to a array that saves the data of that card
    setOpenCards((prevalue) => [...prevalue, cards?.[randomCardIndex]]);

    //For calculating cards value combined
    const newValue = totalCardValue + cards?.[newRandomIndex]?.worth;
    setTotalCardValue(newValue);

    setCards((prevalue) =>
      prevalue.filter((_, index) => index !== newRandomIndex)
    );
  }

  function clickStandHandler() {
    // switchToDealer();
    setOpenCards((prevalue) => [...prevalue, cards?.[randomCardIndex]]);
    console.log("stand");
  }

  //Game logic win and lose events
  useEffect(() => {
    if (totalCardValue === 21) {
      alert("You have a BLACKJACK!!!!!!!!:", totalCardValue);
      // switchToDealer();
    }

    if (totalCardValue > 21) {
      alert("You have lost your above 21 your amount is:", totalCardValue);
    }
  }, [
    // switchToDealer,
    totalCardValue,
  ]);

  return (
    <div>
      <button
        onClick={clickHitHandler}
        className="hit-card-button"
        type="button"
        disabled={dealersTurn}
      >
        Hit
      </button>
      <button
        onClick={clickStandHandler}
        className="hit-card-button"
        disabled={dealersTurn}
        type="button"
      >
        Stand
      </button>
      {/* Card that is draw now */}
      <Card
        oldCard={false}
        image={cards?.[randomCardIndex]?.image}
        value={totalCardValue}
        name={cards?.[randomCardIndex]?.name}
      />

      {/* Previous cards */}
      <section className="drawn-cards">
        {openCards.length > 0 &&
          openCards.map((curCard, index) => (
            <Card
              oldCard={true}
              image={curCard?.image}
              name={curCard?.name}
              key={index}
            />
          ))}
      </section>
    </div>
  );
}
