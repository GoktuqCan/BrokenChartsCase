import Axios from 'axios';
import axiosRetry from 'axios-retry';

const openai = Axios.create({
  baseURL: 'https://api.openai.com/v1',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer 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',
  },
});

axiosRetry(openai, { retries: 3 });

export default openai;
