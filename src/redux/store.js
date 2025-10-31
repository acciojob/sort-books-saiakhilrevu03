import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './bookSlice';

const rootReducer = combineReducers({
  booksData: bookReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
