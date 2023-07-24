import { DispatchedAction } from 'state/types';
import { SET_SEARCH_TERM } from './actionTypes';
import { Activity } from 'state/home/types';
import activities from './activities.json';

export type SearchState = {
  searchTerm: string;
  data: Activity[];
};

const initialState = {
  searchTerm: '',
  data: activities,
};

export default (state = initialState, { type, payload }: DispatchedAction) => {
  switch (type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };

    default:
      return state;
  }
};
