import React, { useState } from "react";
import cardsData from "../../data/cards";
import Card from "../Card/Card";
import "./dealer.css";
import "../Game/game.css";
import "../../index.js";

export default function Test() {
  const [totalCardValueDealer, setTotalCardValueDealer] = useState(0);
  const [randomCardIndex, setRandomCardIndex] = useState(null);
  const [dealerOpenCards, setDealerOpenCards] = useState([]);
  const [cards, setCards] = useState(cardsData);
  const [dealersTurn, setDealersTurn] = useState(false);
  let maxBlackJack = 21;

  function switchToDealer() {
    setDealersTurn(true);
    let counter = totalCardValueDealer;

    // Loop until the dealer's total card value is less than 21
    while (counter < maxBlackJack) {
      //Making a random index for the random card draw
      const newRandomIndex = Math.floor(Math.random() * cards?.length);
      setRandomCardIndex(newRandomIndex);

      //Setting the random card that you hit to a array that saves the data of that card
      setDealerOpenCards((prevalue) => [...prevalue, cards?.[newRandomIndex]]);

      //For calculating cards value combined
      setCards((prevalue) => [
        ...prevalue.filter((_, index) => index !== newRandomIndex),
      ]);

      const newValue = cards?.[newRandomIndex]?.worth;
      counter += newValue;
      setTotalCardValueDealer(counter);
    }
    setRandomCardIndex(null);
  }

  return (
    <div>
      <button onClick={switchToDealer}>test </button>
      <div className="dealer-game-content">
        {/* Dealer selected card */}
        {dealersTurn && (
          <Card
            oldCard={false}
            image={cards?.[randomCardIndex]?.image}
            value={totalCardValueDealer}
            name={cards?.[randomCardIndex]?.name}
          />
        )}

        {/* Dealer previous cards */}
        <section className="drawn-cards">
          {dealerOpenCards.length > 0 &&
            dealerOpenCards.map((curCard, index) => (
              <Card
                oldCard={true}
                image={curCard?.image}
                name={curCard?.name}
                key={index}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
