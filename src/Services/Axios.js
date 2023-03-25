import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://localhost:44369/api/Blackjack/',
  headers: {
    Accept: '*/*',
    Connection: 'keep-alive',
  },
});

export default Axios;
