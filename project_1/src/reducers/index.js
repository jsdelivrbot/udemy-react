import { combineReducers } from 'redux';
import booksReducer from './reducer_books.js'
import activeBookReducer from './reducer_active_book.js'

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer
});

export default rootReducer;
