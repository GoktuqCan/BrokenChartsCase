import { Fields } from 'screens/HomeScreen/HomeScreen';
import { FIND_ACTIVITY, SELECT_TYPE } from './actionTypes';
import { Dispatch } from 'redux';
import axiosInstance from 'services/axiosInstance';
import { ACTIVITY_TYPES } from 'state/constants';
import { RootState } from 'state/types';

export const selectType = (type: string) => ({
  type: SELECT_TYPE,
  payload: type,
});

export const findActivity =
  (fields: Fields) => async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: FIND_ACTIVITY.REQUEST });
    try {
      const { activityType } = getState().home;
      const response = await axiosInstance.get('/activity', {
        params: {
          ...fields,
          ...(activityType !== ACTIVITY_TYPES.all
            ? { type: activityType.toLocaleLowerCase() }
            : {}),
        },
      });
      const { data } = response;
      if (data.error) {
        dispatch({ type: FIND_ACTIVITY.FAIL, payload: data.error });
      } else {
        dispatch({ type: FIND_ACTIVITY.SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: FIND_ACTIVITY.FAIL, payload: error });
    }
  };
