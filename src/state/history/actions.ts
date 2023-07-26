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
    const foundIndex = data.findIndex(listItem => listItem.key === item.key);
    const newData = [...data];
    if (foundIndex !== -1) {
      newData.splice(foundIndex, 1);
    }
    dispatch({
      type: ADD_TO_HISTORY,
      payload: [
        {
          ...item,
          reply,
        },
        ...newData,
      ],
    });
  };

export const clearHistory = () => ({ type: CLEAR_HISTORY });
