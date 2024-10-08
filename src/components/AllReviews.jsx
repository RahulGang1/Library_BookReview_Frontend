import React, { useEffect, useState } from 'react';
import './AllReviews.css';

const AllReviews = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching all books:', error));
  }, []);


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

return (
    <div className="all-reviews-page">
      <img src="https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p1.jpg" className='addIMG' alt="" />
      <h1>All Reviews</h1>
      {books.map(book => (
        <div key={book._id} className="book-reviews">
          <img src={book.imageUrl} alt={book.title} className="bookr-image" />
          <div>

          <h2>{book.title}</h2>
          <h3>By {book.author}</h3>
          {book.reviews.length > 0 ? (
            book.reviews.map(review => (
              <div key={review._id} className="review">
                <p><strong>Rating:</strong> {renderStars(review.rating)}</p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews for this book yet.</p>
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
