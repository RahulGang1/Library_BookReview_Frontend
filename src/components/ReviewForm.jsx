import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewForm.css';

const ReviewForm = ({ bookId, onNewReview }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://library-project-backend-s5cx.onrender.com/api/books/${bookId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating, comment }),
    })
      .then(response => response.json())
      .then(() => {
        setRating('');
        setComment('');
        onNewReview();
        navigate('/');
      })
      .catch(error => console.error('Error adding review:', error));
  };

  return (
    <>
    <div className="review-form">
      <h1 className='Submit-form' >Submit a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rating (1-5):
          
        </label>
        
        <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            />
          <label>
          Comment:
          
        </label>
        <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            />
        <button type="submit">Submit Review</button>
      </form>
    </div>
            </>
  );
};

export default ReviewForm;
