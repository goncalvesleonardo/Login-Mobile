import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60492b3afb5dcc0017969b50.mockapi.io/api',
});

export default api;
