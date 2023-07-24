import { DispatchedAction } from 'state/types';
import { FIND_ACTIVITY, SELECT_TYPE } from './actionTypes';
import { Activity } from './types';
import { ACTIVITY_TYPES } from 'state/constants';

export type HomeState = {
  loading: boolean;
  data: Activity | null;
  error: string | null;
  activityType: string;
};

const initialState = {
  loading: false,
  data: null,
  error: null,
  activityType: ACTIVITY_TYPES.all,
};

export default (state = initialState, { type, payload }: DispatchedAction) => {
  switch (type) {
    case FIND_ACTIVITY.REQUEST:
      return { ...state, loading: true };
    case FIND_ACTIVITY.SUCCESS:
      return { ...state, loading: false, data: payload, error: null };
    case FIND_ACTIVITY.FAIL:
      return { ...state, loading: false, error: payload };
    case SELECT_TYPE:
      console.log(payload);

      return { ...state, activityType: payload };
    default:
      return state;
  }
};
