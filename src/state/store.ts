import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/reducer';
import searchReducer from './search/reducer';
import chatReducer from './chat/reducer';
import historyReducer, {
  HistoryState,
  historyInitialState,
} from './history/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PersistConfig,
  Persistor,
  createTransform,
  persistReducer,
  persistStore,
} from 'redux-persist';

const middlewares = [thunk];

const historyTransform = createTransform(
  (historyState: HistoryState) => {
    return { ...historyInitialState, data: historyState.data };
  },
  null,
  { whitelist: ['history'] },
);

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['history'],
  transforms: [historyTransform],
};

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  chat: chatReducer,
  history: historyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor: Persistor = persistStore(store);

export default store;
