import { DispatchedAction } from 'state/types';
import { GET_COMPLETION } from './activityTypes';

export type ChatState = {
  loading: boolean;
  data: string | null;
  error: string | null;
};

const initialState = {
  loading: false,
  data: '',
  error: null,
};

export default (state = initialState, { type, payload }: DispatchedAction) => {
  switch (type) {
    case GET_COMPLETION.REQUEST:
      return { ...state, loading: true };
    case GET_COMPLETION.SUCCESS:
      return { ...state, loading: false, data: payload, error: null };
    case GET_COMPLETION.FAIL:
      return { ...state, loading: false, error: payload, data: null };
    default:
      return state;
  }
};
