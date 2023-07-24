import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://www.boredapi.com/api',
  timeout: 10000,
});

export default axiosInstance;
