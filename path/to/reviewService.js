// Review service that calculates the percentage of ratings
class ReviewService {
    getRatingPercentage(reviews) {
        const totalReviews = reviews.length;
        const positiveReviews = reviews.filter(review => review.rating >= 4).length;
        return totalReviews > 0 ? (positiveReviews / totalReviews) * 100 : 0;
    }
}