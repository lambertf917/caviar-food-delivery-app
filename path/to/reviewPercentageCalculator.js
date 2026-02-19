// This is the file where the percentage calculation takes place
function calculateReviewPercentage(totalReviews, positiveReviews) {
    if (totalReviews === 0) return 0; // Avoid division by zero
    return ((positiveReviews / totalReviews) * 100).toFixed(2);
}

// Example usage
const totalReviews = 41; // Replace with actual total reviews count
const positiveReviews = 7; // Replace with actual positive reviews count
const percentage = calculateReviewPercentage(totalReviews, positiveReviews);
console.log(`Review percentage: ${percentage}%`);