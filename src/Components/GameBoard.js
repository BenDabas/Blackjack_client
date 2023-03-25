import React, { useState, useEffect } from 'react';

import PlayerHand from './PlayerHand';
import DealerHand from './DealerHand';
import Controls from './Controls';
import ResultModal from './ResultModel';

import {
  startGame,
  playerHit,
  checkPlayerBust,
  playerStand,
  dealerPlay,
  endGame,
  calculatePlayerHand,
  calculateDealerHand,
} from '../Services/Api';

import './GameBoard.css';

const GameBoard = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [isPlayerBust, setIsPlayerBust] = useState(false);
  const [winner, setWinner] = useState(null);
  const [playerHandAmount, setPlayerHandAmount] = useState(0);
  const [dealerHandAmount, setDealerHandAmount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (isPlayerBust) {
      HandleEndGame();
    }
  }, [isPlayerBust]);

  useEffect(() => {
    setIsGameStarted(playerCards && playerCards.length > 0);
  }, [playerCards]);

  useEffect(() => {
    HandlePlayerHandAmount();
    HandleDealerHandAmount();
  }, [playerCards, dealerCards]);

  const HandleNewGame = async () => {
    setIsPlayerBust(false);
    setWinner(null);
    const response = await startGame();
    setPlayerCards(response.data.playerHand.cards);
    setDealerCards(response.data.dealerHand.cards);
  };

  const HandlePlayerHit = async () => {
    const response = await playerHit();
    setPlayerCards(response.data.playerHand.cards);
    HandlePlayerBust();
  };

  const HandlePlayerBust = async () => {
    const response = await checkPlayerBust();
    setIsPlayerBust(response.data);
  };

  const HandlePlayerStand = async () => {
    await playerStand();
    HandleDealerPlay();
    HandleEndGame();
  };

  const HandleDealerPlay = async () => {
    const response = await dealerPlay();
    setDealerCards(response.data.dealerHand.cards);
  };

  const HandleEndGame = async () => {
    const response = await endGame();
    setWinner(response.data.winner);
  };

  const HandlePlayerHandAmount = async () => {
    const response = await calculatePlayerHand();
    setPlayerHandAmount(response.data);
  };
  const HandleDealerHandAmount = async () => {
    const response = await calculateDealerHand();
    setDealerHandAmount(response.data);
  };

  return (
    <div className="game-board-container">
      {winner && (
        <ResultModal
          winner={winner}
          onClose={() => {
            setWinner(null);
            HandleNewGame();
          }}
        />
      )}
      <div className="hand-container">
        {isGameStarted && (
          <label>{`Dealer hand amount: ${dealerHandAmount}`}</label>
        )}
        <DealerHand cards={dealerCards} />
      </div>
      <div className="hand-container">
        {isGameStarted && (
          <label>{`Your hand amount: ${playerHandAmount}`}</label>
        )}
        <PlayerHand cards={playerCards} />
      </div>
      <Controls
        handleNewGame={HandleNewGame}
        handlePlayerHit={HandlePlayerHit}
        playerBust={isPlayerBust}
        handlePlayerStand={HandlePlayerStand}
        winner={winner}
        playerCards={playerCards}
      />
    </div>
  );
};

export default GameBoard;
