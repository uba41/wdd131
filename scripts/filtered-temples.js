const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Belém Brazil",
		Location: "Belém Brazil",
		dedicated: "2022, November, 2022",
		area: 28675,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
	},

	{
		templeName:"Columbia South Carolina",
		Location: "Columbia South Carolina",
		dedicated: " 1999, October, 16-17",
		area: 10700,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg"
	},

	{
		templeName:"Durban South Africa",
		Location: "Durban South Africa",
		dedicated: "2020, February, 16",
		area: 19860,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/8-1eaa4f7e9756e19fbf8e0434504dec39478d1b13.jpg"
	}
	// Add more temple objects here...
];

const container = document.querySelector('.container.stdlf'); // Select the container div where you want to insert cards
const mainnav = document.querySelector('.navigation');

// Function to clear and display given array of temples
function displayTemples(templesToShow) {
	container.innerHTML = ''; // Clear current content

	templesToShow.forEach(temple => {
		const figure = document.createElement('figure');

		// Create the image element
		const img = document.createElement('img');
		img.src = temple.imageUrl;
		img.alt = temple.templeName + " Temple";
		img.loading = "lazy";
		img.width = 400; // set desired width (optional)
		img.height = 250; // set desired height (optional)

		// Create the figcaption element with temple details
		const figcaption = document.createElement('figcaption');
		figcaption.innerHTML = `
			<h3>${temple.templeName}</h3>
			<p><strong>Location:</strong> ${temple.location}</p>
			<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
			<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
		`;

		// Append image and caption to figure
		figure.appendChild(img);
		figure.appendChild(figcaption);

		// Append the figure to the container
		container.appendChild(figure);
	});
}

// Initial load: show all temples
displayTemples(temples);

// Add event listener for menu clicks
mainnav.addEventListener('click', event => {
	event.preventDefault();
	const clickedText = event.target.textContent.trim().toLowerCase();

	let filteredTemples = [];

	switch (clickedText) {
		case 'old':
			// Temples dedicated before 1900
			filteredTemples = temples.filter(temple => {
				const year = new Date(temple.dedicated).getFullYear();
				return year < 1900;
			});
			break;

		case 'new':
				// Temples dedicated after 2000
			filteredTemples = temples.filter(temple => {
				const year = new Date(temple.dedicated).getFullYear();
				return year > 2000;
			});
			break;
		case 'large':
			// Temples larger than 90,000 sq ft
			filteredTemples = temples.filter(temple => temple.area > 90000);
			break;
		case 'small':
			// Temples smaller than 10,000 sq ft
			filteredTemples = temples.filter(temple => temple.area < 10000);
			break;
		case 'home':
			// Show all temples
			filteredTemples = temples;
			break;
		default:
			// In case user clicks somewhere else, do nothing or show all
			filteredTemples = temples;
  	}

  	displayTemples(filteredTemples);
});

// Display the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById('lastModified').textContent = 
  "Last Modified: " + document.lastModified;