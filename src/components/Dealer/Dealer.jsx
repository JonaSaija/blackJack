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
  let maxWhileLoop = 2;
  let indexWhileLoop = 0;

  function switchToDealer() {
    setDealersTurn(true);

    // Loop until the dealer's total card value is less than 21
    while (indexWhileLoop < maxWhileLoop) {
      indexWhileLoop++;

      //Making a random index for the random card draw
      const newRandomIndex = Math.floor(Math.random() * cards?.length);
      setRandomCardIndex(newRandomIndex);
      console.log(randomCardIndex);

      //Setting the random card that you hit to a array that saves the data of that card
      setDealerOpenCards((prevalue) => [...prevalue, cards?.[newRandomIndex]]);

      //For calculating cards value combined
      const newValue = totalCardValueDealer + cards?.[newRandomIndex]?.worth;
      setTotalCardValueDealer(newValue);

      setCards((prevalue) =>
        prevalue.filter((_, index) => index !== newRandomIndex)
      );

      console.log(
        "Dealer's total card value:",
        newValue,
        "and the value of the whileLoop:",
        dealerOpenCards,
        "and the value of the randomIndex:",
        newRandomIndex
      );

      // Break the loop if the dealer busts or reaches 21
      if (indexWhileLoop > maxWhileLoop) {
        break;
      }
    }
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
