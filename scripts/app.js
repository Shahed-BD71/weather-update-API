const apiKey = '6c7ea90af1f94fbd5ed925dfbe2e41e6';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

const updateUI = data => {
    document.getElementById('show-city').innerText = data.name || "Unknown Location!";
    document.getElementById('show-temperature').innerText = data.main.temp;
    document.getElementById('weather-status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

getWeatherData('Chittagong');