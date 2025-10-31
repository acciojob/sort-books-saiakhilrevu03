import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, setSortBy, setSortOrder } from '../redux/bookSlice';

function BooksList() {
  const dispatch = useDispatch();
  const { books, loading, error, sortBy, sortOrder } = useSelector(state => state.booksData);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Sorting handler
  const sortedBooks = [...books].sort((a, b) => {
    let x = a[sortBy]?.toLowerCase() || '';
    let y = b[sortBy]?.toLowerCase() || '';
    if (x < y) return sortOrder === 'asc' ? -1 : 1;
    if (x > y) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1>NYT Book List</h1>
      <div>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))} >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
          </select>
        </label>
        <label>
          Order:
          <select value={sortOrder} onChange={(e) => dispatch(setSortOrder(e.target.value))} >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      {loading && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}
      <table border="1" cellPadding="6" cellSpacing="0" style={{marginTop: '10px'}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map(book => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
