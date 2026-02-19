import React from 'react';
import { calculateReviewPercentage } from './reviewPercentageCalculator';

const ReviewComponent = ({ totalReviews, positiveReviews }) => {
    const reviewPercentage = calculateReviewPercentage(totalReviews, positiveReviews);

    return (
        <div>
            <p>Total Reviews: {totalReviews}</p>
            <p>Positive Reviews: {positiveReviews}</p>
            <p>Review Percentage: {reviewPercentage}%</p>
        </div>
    );
};

export default ReviewComponent;