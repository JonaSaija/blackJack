export default function BetSystem({
  betInput,
  handleBetOutput,
  playerWin,
  blackJack,
}) {
  let gain;

  if (playerWin) {
    if (blackJack) {
      gain = Math.floor(betInput * 2.5);
    } else {
      gain = Math.floor(betInput * 2);
    }
  } else {
    gain = Math.floor(betInput * 0);
  }

  return handleBetOutput(gain);
}
