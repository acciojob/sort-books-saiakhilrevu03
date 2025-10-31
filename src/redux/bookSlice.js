// Initial State
const initialState = {
  books: [],
  loading: false,
  error: null,
  sortBy: 'title', // options: 'title', 'author', 'publisher'
  sortOrder: 'asc' // options: 'asc', 'desc'
};

// Action Types
export const FETCH_BOOKS_REQUEST = 'books/fetchRequest';
export const FETCH_BOOKS_SUCCESS = 'books/fetchSuccess';
export const FETCH_BOOKS_FAILURE = 'books/fetchFailure';
export const SET_SORT_BY = 'books/setSortBy';
export const SET_SORT_ORDER = 'books/setSortOrder';

// Action Creators
export const fetchBooksRequest = () => ({ type: FETCH_BOOKS_REQUEST });
export const fetchBooksSuccess = (books) => ({ type: FETCH_BOOKS_SUCCESS, payload: books });
export const fetchBooksFailure = (error) => ({ type: FETCH_BOOKS_FAILURE, payload: error });
export const setSortBy = (sortBy) => ({ type: SET_SORT_BY, payload: sortBy });
export const setSortOrder = (sortOrder) => ({ type: SET_SORT_ORDER, payload: sortOrder });

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };
    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
}
