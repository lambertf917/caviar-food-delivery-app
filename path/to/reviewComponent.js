// Review component that displays ratings
import React from 'react';
import ReviewService from './reviewService';

const ReviewComponent = ({ reviews }) => {
    const ratingPercentage = ReviewService.getRatingPercentage(reviews);

    return (
        <div>
            <h3>Reviews</h3>
            <p>{ratingPercentage}% of reviews are 4 stars or higher</p>
        </div>
    );
};

export default ReviewComponent;