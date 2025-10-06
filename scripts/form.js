const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.getElementById('product-select');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});

// Retrieve the current count from localStorage, or default to 0
let reviewCount = localStorage.getItem('reviewCount');
if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount, 10);
}

// Increment the count by 1 for the current submission
reviewCount += 1;

// Save the updated count back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the count on the page
const countParagraph = document.getElementById('review-count');
countParagraph.textContent = `You have submitted ${reviewCount} review${reviewCount !== 1 ? 's' : ''}.`;

// Display the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById('lastModified').textContent = 
  "Last Modified: " + document.lastModified;