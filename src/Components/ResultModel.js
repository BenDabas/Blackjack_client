import React from 'react';
import './ResultModal.css';

const ResultModal = ({ winner, onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>{winner === 'Player' ? 'You Win!' : 'You Lose!'}</h2>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
