import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure
} from './bookSlice';

const API_KEY = 'YOUR_NYT_BOOKS_API_KEY';
const API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${GAteSicObGEiTD0QVm5EiTXNUe8NlB8A}`;

// Thunk to fetch books
export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();
    // Extract book list
    const books = data.results.books.map((book) => ({
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      isbn: book.primary_isbn13
    }));
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};
