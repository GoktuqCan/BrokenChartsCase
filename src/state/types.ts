import { ChatState } from './chat/reducer';
import { HistoryState } from './history/reducer';
import { HomeState } from './home/reducer';
import { SearchState } from './search/reducer';

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
  search: SearchState;
  chat: ChatState;
  history: HistoryState;
};

export type Loadable<T = never> = {
  data?: T;
  loading: boolean;
  error?: any;
};
