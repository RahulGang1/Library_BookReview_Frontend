import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-details">
      <img src={book.imageUrl} alt={book.title} className="book-imagex" />
        <h2>{book.title}</h2>
        <h3>By {book.author}</h3>
        <p>{book.description}</p>
        <Link to={`/books/${book._id}`}>View Details</Link>
        {/* <Link to={`/books/${book._id}/reviews`} className="view-reviews-btn"> */}
          
        {/* </Link> */}
      </div>
    </div>
  );
};

export default BookCard;
