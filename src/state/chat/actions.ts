import { Dispatch } from 'redux';
import openai from 'services/openai';
import { GET_COMPLETION } from './activityTypes';

export const getCompletion =
  (activity: string) => async (dispatch: Dispatch) => {
    dispatch({ type: GET_COMPLETION.REQUEST });
    try {
      const response = await openai.post('/completions', {
        model: 'text-davinci-003',
        prompt: `I want to ${activity}`,
        max_tokens: 70,
      });
      const text = response.data.choices[0]?.text.trim() || 'Not found';
      dispatch({ type: GET_COMPLETION.SUCCESS, payload: text });
    } catch (error) {
      dispatch({ type: GET_COMPLETION.FAIL, payload: error });
    }
  };
