import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './bookSlice';

const store = createStore(
  bookReducer,
  applyMiddleware(thunk)
);

export default store;
