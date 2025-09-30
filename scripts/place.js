// FOOTER: Set current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
const modDate = document.getElementById("lastModified");
modDate.textContent = `Last Modification: ${lastModified}`;


// WEATHER: Static values (°C + km/h)
const temperature = 10;       // °C
const windSpeed = 5;          // km/h

// WINDCHILL CALC FUNCTION — METRIC VERSION
function calculateWindChill(t, v) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

// Apply Wind Chill if conditions are valid
const windChillElement = document.querySelector(".weather-list li:last-child");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = `<span class="label">Wind Chill:</span> ${windChill} °C`;
} else {
    windChillElement.innerHTML = `<span class="label">Wind Chill:</span> N/A`;
}