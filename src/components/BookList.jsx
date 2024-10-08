import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import ImageSlider from './ImageSlider';  
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://library-project-backend-s5cx.onrender.com/api/books?search=${search}`)
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, [search]);

  return (
    <div className='book-D'>
      <div className='search-div'>
      <input
        className='search'
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='SearchButton'>Search</button>
      </div>
      
      <ImageSlider /> 
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
