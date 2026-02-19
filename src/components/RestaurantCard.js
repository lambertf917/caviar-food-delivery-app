import React from 'react';
import ReviewPercentage from './ReviewPercentage';

const RestaurantCard = ({ restaurant }) => {
    const totalReviews = restaurant.reviews.length;
    const positiveReviews = restaurant.reviews.filter(review => review.rating >= 4).length;

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <ReviewPercentage totalReviews={totalReviews} positiveReviews={positiveReviews} />
        </div>
    );
};

export default RestaurantCard;