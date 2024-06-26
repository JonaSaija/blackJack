import React, { useEffect, useState, useCallback } from "react";
import Card from "../Card/Card.jsx";
import "./game.css";
import "../../index.js";
import cardsData from "../../data/cards.js";
import BetSystem from "../Bet/BetSystem.jsx";

//component for dealer, player, buttons/actions
export default function Game({ playerTurn, handlePlayerTurn }) {
  //Variables for player
  const [openCards, setOpenCards] = useState([]);
  const [totalCardValue, setTotalCardValue] = useState(0);
  const [randomCardIndex, setRandomCardIndex] = useState(null);

  //Variables for dealer
  const [totalCardValueDealer, setTotalCardValueDealer] = useState(0);
  const [dealerOpenCards, setDealerOpenCards] = useState([]);
  const [dealerRandomCardIndex, setDealerRandomCardIndex] = useState(null);
  const [dealersTurn, setDealersTurn] = useState();

  //Variables for both
  const [wonByBlackJack, setWonByBlackJack] = useState(false);
  const [playerWon, setPlayerWon] = useState(null);
  const [cards, setCards] = useState(cardsData);
  let minScoreMaxDraw = 15;

  //Hit logic
  const switchToDealer = useCallback(() => {
    setDealersTurn(true);
    let counter = totalCardValueDealer;

    // Loop until the dealer's total card value is less than 21
    while (counter < minScoreMaxDraw) {
      //Making a random index for the random card draw
      const newRandomIndex = Math.floor(Math.random() * cards?.length);
      setDealerRandomCardIndex(newRandomIndex);

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
    setTotalCardValueDealer(counter);
    setDealerRandomCardIndex(null);
    setRandomCardIndex(null);
    setDealersTurn(false);
  }, [cards, minScoreMaxDraw, totalCardValueDealer]);

  //Hit logic
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

  //Stand logic
  function clickStandHandler() {
    switchToDealer();
    setOpenCards((prevalue) => [...prevalue, cards?.[randomCardIndex]]);
    console.log("stand");
    handlePlayerTurn(false);
  }

  //Game logic win and lose events
  useEffect(() => {
    //Player win and lose conditions!!!!!!
    //function for alert and playerwon boolean
    //switch case
    if (totalCardValue === 21) {
      alert("You have a BLACKJACK!!!!!!!!:", totalCardValue);
      switchToDealer();
      setWonByBlackJack(true);
      setPlayerWon(true);
    }

    if (totalCardValue > 21) {
      alert("You have lost your above 21 your amount is:", totalCardValue);
      setPlayerWon(false);
      handlePlayerTurn(false);
      switchToDealer();
    }

    //Dealer win and lose conditions!!!!!!
    if (totalCardValueDealer === 21) {
      alert("Dealer has a BLACKJACK!!!!!!!!:", totalCardValueDealer);
      setPlayerWon(false);
      setDealersTurn(false);
    }

    if (totalCardValueDealer > 21) {
      alert("Dealer has lost:", totalCardValueDealer);
      setDealersTurn(false);
      setPlayerWon(true);
    }

    if (!dealersTurn && !playerTurn) {
      //Both player and dealer con
      if (dealersTurn) {
        if (totalCardValue > totalCardValueDealer) {
          alert("You have won the game with a score of:", totalCardValue);
          setPlayerWon(true);
        }
        if (
          totalCardValue < totalCardValueDealer &&
          totalCardValueDealer < 21
        ) {
          alert(
            "You lose the dealer wins the game with a score of:",
            totalCardValue
          );
          setPlayerWon(false);
        }
      }
      if (totalCardValueDealer === totalCardValue) {
        alert("Draw no one wins!!!!!!:", totalCardValue, totalCardValueDealer);
      }

      if (totalCardValue > totalCardValueDealer) {
        alert("You have won the game with a score of:", totalCardValue);
        switchToDealer();
        setPlayerWon(true);
      }

      if (totalCardValue < totalCardValueDealer && totalCardValueDealer < 21) {
        alert(
          "You lose the dealer wins the game with a score of:",
          totalCardValueDealer
        );
        setPlayerWon(false);
      }
    }
  }, [
    setPlayerWon,
    switchToDealer,
    totalCardValue,
    totalCardValueDealer,
    dealersTurn,
    playerTurn,
    handlePlayerTurn,
  ]);

  function clickResetGameHandler() {
    //Variables for player
    setOpenCards([]);
    setTotalCardValue(0);
    setRandomCardIndex(null);
    handlePlayerTurn(true);

    //Variables for dealer
    setTotalCardValueDealer(0);
    setDealerOpenCards([]);
    setDealerRandomCardIndex(null);
    setDealersTurn();

    //Both
    setWonByBlackJack(false);
    setPlayerWon(null);
  }

  return (
    <div>
      <div className="reset-div">
        <button
          onClick={() => clickResetGameHandler()}
          className="reset-button"
          type="button"
        >
          Reset Game
        </button>
      </div>
      <div className="dealer-game-content">
        {/* Dealer selected card */}

        <Card
          oldCard={false}
          image={cards?.[dealerRandomCardIndex]?.image}
          value={totalCardValueDealer}
          name={cards?.[dealerRandomCardIndex]?.name}
        />

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
      <div className="player-game-content">
        {/* Card that is draw now */}
        <Card
          oldCard={false}
          image={cards?.[randomCardIndex]?.image}
          value={totalCardValue}
          name={cards?.[randomCardIndex]?.name}
        />

        <BetSystem blackJack={wonByBlackJack} playerWin={playerWon} />

        <button
          onClick={clickHitHandler}
          className="hit-card-button"
          type="button"
          disabled={!playerTurn}
        >
          Hit
        </button>
        <button
          onClick={clickStandHandler}
          className="hit-card-button"
          disabled={!playerTurn}
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
