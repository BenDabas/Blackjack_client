import React from 'react';

import PlayingCard from './PlayingCard';

const DealerHand = ({ cards }) => {
  const renderCards = (card, index) => {
    if (card.isHoleCard) {
      return (
        <PlayingCard key={`hole-card-${index}`} rank="Hole Card" suit="" />
      );
    }
    return <PlayingCard key={index} rank={card.faceValue} suit={card.suit} />;
  };

  return <>{cards.map(renderCards)}</>;
};

export default DealerHand;
