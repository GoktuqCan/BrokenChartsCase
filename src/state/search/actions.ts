import { SET_SEARCH_TERM } from './actionTypes';

export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
