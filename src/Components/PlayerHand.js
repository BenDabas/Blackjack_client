import React from 'react';

import PlayingCard from './PlayingCard';

const PlayerHand = ({ cards }) => {
  return (
    <>
      {cards &&
        cards.map((card, index) => {
          return (
            <PlayingCard key={index} rank={card.faceValue} suit={card.suit} />
          );
        })}
    </>
  );
};

export default PlayerHand;
