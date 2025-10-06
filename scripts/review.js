let reviewCount = localStorage.getItem('reviewCount');
if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount, 10);
}

// Increment the count to reflect this submission
reviewCount += 1;

// Save the updated count back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the count on the page
const countElement = document.getElementById('review-count');
countElement.textContent = `You have submitted ${reviewCount} review${reviewCount !== 1 ? 's' : ''}.`;