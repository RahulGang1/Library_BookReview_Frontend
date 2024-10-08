import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    // Fetch book details and reviews
    fetch(`http://localhost:3000/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        setReviews(data.reviews); // Assuming reviews are part of book data
      })
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  const handleNewReview = () => {
    // Refetch the book to update the reviews list after adding a new review
    fetch(`http://localhost:3000/api/books/${id}`)
      .then(response => response.json())
      .then(data => setReviews(data.reviews))
      .catch(error => console.error('Error fetching updated reviews:', error));
  };

  // Function to render star ratings
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
    <div className="book-details-page">
      {book && (
        <>
          <h1 className='book-h1-d'>{book.title}</h1>
          <h2>By {book.author}</h2>
          <img src={book.imageUrl} alt={book.title} className="book-imagex" />
          <p>{book.description}</p>

          {/* Display reviews */}
          <div className="reviews">
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map(review => (
                <div key={review._id} className="review">
                  <p><strong>Rating:</strong> {renderStars(review.rating)}</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review!</p>
            )}
          </div>

         
          <button onClick={() => setShowReviewForm(!showReviewForm)}>
            {showReviewForm ? 'Hide Review Form' : 'Write a Review'}
          </button>
          {showReviewForm && (
            <ReviewForm bookId={id} onNewReview={handleNewReview} />
          )}
        </>
      )}
    </div>
  );
};

export default BookDetails;
