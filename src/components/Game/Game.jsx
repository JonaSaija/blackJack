import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import "./game.css";
import "../../index.js";
// import DealerContent from "../Dealer/Dealer.jsx";
import cardsData from "../../data/cards.js";

export default function Game() {
  //Variables for player
  const [openCards, setOpenCards] = useState([]);
  const [totalCardValue, setTotalCardValue] = useState(0);
  const [dealersTurn, setDealersTurn] = useState(false);

  //Variables for dealer
  const [totalCardValueDealer, setTotalCardValueDealer] = useState(0);
  const [dealerOpenCards, setDealerOpenCards] = useState([]);

  //Both
  const [randomCardIndex, setRandomCardIndex] = useState(null);
  const [cards, setCards] = useState(cardsData);
  let minScoreMaxDraw = 15;

  function switchToDealer() {
    setDealersTurn(true);
    let counter = totalCardValueDealer;

    // Loop until the dealer's total card value is less than 21
    while (counter < minScoreMaxDraw) {
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
    switchToDealer();
    setOpenCards((prevalue) => [...prevalue, cards?.[randomCardIndex]]);
    console.log("stand");
  }

  //Game logic win and lose events
  useEffect(() => {
    //Player win and lose conditions!!!!!!
    if (totalCardValue === 21) {
      alert("You have a BLACKJACK!!!!!!!!:", totalCardValue);
      switchToDealer();
    }

    if (totalCardValue > 21) {
      alert("You have lost your above 21 your amount is:", totalCardValue);
    }

    //Dealer win and lose conditions!!!!!!
    if (totalCardValueDealer === 21) {
      alert("Dealer has a BLACKJACK!!!!!!!!:", totalCardValueDealer);
    }

    if (totalCardValueDealer > 21) {
      alert("Dealer has lost:", totalCardValueDealer);
    }

    //Both player and dealer con
    if (dealersTurn) {
      if (totalCardValue > totalCardValueDealer) {
        alert("You have won the game with a score of:", totalCardValue);
      }
      if (totalCardValue < totalCardValueDealer && totalCardValueDealer < 21) {
        alert(
          "You lose the dealer wins the game with a score of:",
          totalCardValue
        );
      }
    }
  }, [switchToDealer, totalCardValue, totalCardValueDealer, dealersTurn]);

  return (
    <div>
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
      <div className="dealer-game-content">
        {/* Card that is draw now */}
        <Card
          oldCard={false}
          image={cards?.[randomCardIndex]?.image}
          value={totalCardValue}
          name={cards?.[randomCardIndex]?.name}
        />

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
    </div>
  );
}
