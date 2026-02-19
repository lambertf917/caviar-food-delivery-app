import React from 'react';

const ReviewPercentage = ({ totalReviews, positiveReviews }) => {
    const calculatePercentage = () => {
        if (totalReviews === 0) return 0;
        return ((positiveReviews / totalReviews) * 100).toFixed(2);
    };

    return (
        <div>
            {calculatePercentage()}% of reviews are positive
        </div>
    );
};

export default ReviewPercentage;