import { useState } from "react";

export default function BetSystem({ playerWin, blackJack }) {
  const [betInput, setBetInput] = useState(0);
  let gain;

  function calculatingBetWinValue() {
    if (blackJack) {
      gain = Math.floor(betInput * 2.5);
    } else {
      gain = Math.floor(betInput * 2);
    }
  }

  if (playerWin) {
    calculatingBetWinValue();
  } else {
    gain = Math.floor(betInput * 0);
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
          style={{ textAlign: `center` }}
        />
        <input
          className="bet-input"
          placeholder={gain}
          readOnly
          value={gain}
          style={{ textAlign: `center` }}
        />
      </section>
    </div>
  );
}
