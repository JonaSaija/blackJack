import { useEffect, useState } from "react";
import "./bet.css";

export default function BetSystem({ playerWin, blackJack }) {
  const [betInput, setBetInput] = useState(0);
  const [totalBetGain, setTotalBetGain] = useState(0);
  const [gain, setGain] = useState(0);

  function totalBetWinValue() {
    //For calculating cards value combined
    const newValue = gain + totalBetGain;
    setTotalBetGain(newValue);
  }

  useEffect(() => {
    if (playerWin) {
      calculatingBetWinValue();
    } else {
      setGain(Math.floor(betInput * 0));
    }
  }, [playerWin, gain, betInput]);

  function calculatingBetWinValue() {
    if (blackJack) {
      setGain(Math.floor(betInput * 2.5));
    } else {
      setGain(Math.floor(betInput * 2));
    }
    totalBetWinValue();
  }

  return (
    <div>
      <section>
        <input
          className="bet-input"
          type="number"
          placeholder="But your bet amount here!"
          onChange={(e) => setBetInput(Number(e.target.value))}
          value={betInput}
        />
        <input className="bet-input" placeholder={gain} readOnly value={gain} />
        <p>
          Your total gain:
          <input
            className="bet-input"
            readOnly
            value={totalBetGain}
            onChange={(e) => setTotalBetGain(e.target.value)}
          />
        </p>
      </section>
    </div>
  );
}
