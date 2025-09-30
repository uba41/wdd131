// FOOTER: Set current year and last modified date
const footer = document.querySelector("footer");

// Optional: Dynamically add elements if not already in HTML
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

const yearSpan = document.createElement("span");
yearSpan.textContent = `©${currentYear}`;

const modDate = document.createElement("p");
modDate.textContent = `Last Modification: ${lastModified}`;

// Append to footer if needed (or update existing)
footer.prepend(yearSpan);
footer.appendChild(modDate);

// WEATHER: Static values (°C + km/h)
const temperature = 10;       // °C
const windSpeed = 5;          // km/h

// WINDCHILL CALC FUNCTION — METRIC VERSION
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// Apply Wind Chill if conditions are valid
const windChillElement = document.querySelector(".weather-list li:last-child"); // Assumes last <li> is Wind Chill

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.innerHTML = `<span class="label">Wind Chill:</span> ${windChill} °C`;
} else {
  windChillElement.innerHTML = `<span class="label">Wind Chill:</span> N/A`;
}