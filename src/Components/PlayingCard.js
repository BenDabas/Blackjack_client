import React from 'react';

import Card from 'react-playing-card';

import './PlayingCard.css';

const PlayingCard = ({ rank, suit }) => {
  return (
    <div className="customContainer">
      <div className="cardContainer">
        <Card rank={rank} suit={suit} />
      </div>
    </div>
  );
};

export default PlayingCard;
