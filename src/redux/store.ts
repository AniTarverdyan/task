import { combineReducers, createStore } from 'redux';
import { homeReducer } from './main/reducers';

const reducers = combineReducers({
  home: homeReducer,
});
export const store = createStore(reducers);
export type RootState = ReturnType<typeof store.getState>;


