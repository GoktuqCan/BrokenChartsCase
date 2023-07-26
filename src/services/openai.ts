import Axios from 'axios';
import axiosRetry from 'axios-retry';
import Config from 'react-native-config';

const openai = Axios.create({
  baseURL: 'https://api.openai.com/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${Config.OPENAI_KEY}`,
  },
});

axiosRetry(openai, { retries: 3 });

export default openai;
