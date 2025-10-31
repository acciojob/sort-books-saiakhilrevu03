import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from './bookSlice';

const API_KEY = 'GAteSicObGEiTD0QVm5EiTXNUe8NlB8A';
const API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const books = data.results.books.map(book => ({
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
