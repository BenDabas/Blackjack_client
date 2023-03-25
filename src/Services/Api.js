import Axios from './Axios';

export const startGame = async () => {
  try {
    const response = await Axios.post('start', {});
    return response;
  } catch (error) {
    console.error('Error starting game:', error);
  }
};

export const playerHit = async () => {
  try {
    const response = await Axios.post('hit', {});
    return response;
  } catch (error) {
    console.error('Error in player hit:', error);
  }
};

export const checkPlayerBust = async () => {
  try {
    const response = await Axios.get('player-bust');
    return response;
  } catch (error) {
    console.error('Error checking player bust:', error);
  }
};

export const playerStand = async () => {
  try {
    const response = await Axios.post('stand', {});
    return response;
  } catch (error) {
    console.error('Error in player stand:', error);
  }
};

export const dealerPlay = async () => {
  try {
    const response = await Axios.post('dealer-play', {});
    return response;
  } catch (error) {
    console.log('Error in dealer play:', error);
  }
};

export const endGame = async () => {
  try {
    const response = await Axios.post('end-game', {});
    return response;
  } catch (error) {
    console.log('Error dealer play:', error);
  }
};

export const calculatePlayerHand = async () => {
  try {
    const response = await Axios.get('calculate-player-hand');
    return response;
  } catch (error) {
    console.log('Error dealer play:', error);
  }
};

export const calculateDealerHand = async () => {
  try {
    const response = await Axios.get('calculate-dealer-hand');
    return response;
  } catch (error) {
    console.log('Error dealer play:', error);
  }
};
