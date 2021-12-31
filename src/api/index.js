import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

const axiosClient = axios.create({
  baseURL: URL,
});

export default axiosClient;
