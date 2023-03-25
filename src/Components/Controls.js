import React, { useEffect, useState } from 'react';

import './Controls.css';

const Controls = ({
  handleNewGame,
  handlePlayerHit,
  playerBust,
  handlePlayerStand,
  winner,
  playerCards,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    setIsGameStarted(playerCards && playerCards.length > 0);
  }, [playerCards]);

  return (
    <div className="controls-container">
      <button className="btn" onClick={handleNewGame}>
        Start new game
      </button>
      <button
        className="btn"
        disabled={playerBust || winner || !isGameStarted}
        onClick={handlePlayerHit}
      >
        Hit
      </button>
      <button
        className="btn"
        disabled={winner || !isGameStarted}
        onClick={handlePlayerStand}
      >
        Stand
      </button>
    </div>
  );
};

export default Controls;
