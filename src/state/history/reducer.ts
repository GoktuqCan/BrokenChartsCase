import { DispatchedAction } from 'state/types';
import {
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  SET_HISTORY_SEARCH_TERM,
} from './actionTypes';
import { Activity } from 'state/home/types';

export type HistoryState = {
  searchTerm: string;
  data: Activity[];
};

export const historyInitialState = {
  searchTerm: '',
  data: [],
};

export default (
  state = historyInitialState,
  { type, payload }: DispatchedAction,
) => {
  switch (type) {
    case SET_HISTORY_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case ADD_TO_HISTORY:
      return { ...state, data: payload };
    case CLEAR_HISTORY:
      return historyInitialState;
    default:
      return state;
  }
};
