const weatherSection = document.querySelector('.weather');
const apiKey = 'f97052b3b8a789b7348b4671b69928e9';
const lat = 47.8563;
const lon = -104.0447;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.json();
    })
    .then(data => {
        const { main, weather, name } = data;
        const temp = main.temp;
        const description = weather[0].description;

        weatherSection.innerHTML = `
            <h2>Weather in Fairview<h2>
            <p>Temperature: ${temp} deg Celcius</p>
            <p>Condition: ${description}</p>
            `;
    })
    .catch(error => {
        console.error('Problem with fetch operation:', error);
        weatherSection.innerHTML = `<p>Weather data cannot be loaded at this time.</p>`;
});