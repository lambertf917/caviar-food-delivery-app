import React from 'react';

const ReviewSection = ({ reviews }) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;

    const positivePercentage = totalReviews > 0 ? (positiveReviews / totalReviews) * 100 : 0;

    return (
        <div>
            <h3>Customer Reviews</h3>
            <p>{`Total Reviews: ${totalReviews}`}</p>
            <p>{`Positive Reviews: ${positivePercentage.toFixed(2)}%`}</p>
            {/* Render reviews here */}
        </div>
    );
};

export default ReviewSection;