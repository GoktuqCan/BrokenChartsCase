import { HomeState } from './home/reducer';

export type DispatchedAction<T = any> = {
  type: string;
  payload?: T;
};
export type ReduceFunction<T> = (
  state: T,
  { type, payload }: DispatchedAction<any>,
) => T;
export type RootState = {
  home: HomeState;
};

export type Loadable<T = never> = {
  data?: T;
  loading: boolean;
  error?: any;
};
