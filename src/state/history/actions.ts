import { Activity } from 'state/home/types';
import {
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  SET_HISTORY_SEARCH_TERM,
} from './actionTypes';
import { Dispatch } from 'redux';
import { RootState } from 'state/types';

export const setHistorySearchTerm = (term: string) => ({
  type: SET_HISTORY_SEARCH_TERM,
  payload: term,
});

export const addToHistory =
  (item: Activity, reply: string) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    const { data } = getState().history;
    dispatch({
      type: ADD_TO_HISTORY,
      payload: [
        ...data,
        {
          ...item,
          reply,
        },
      ],
    });
  };

export const clearHistory = () => ({ type: CLEAR_HISTORY });
