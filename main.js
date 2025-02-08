const apiKey = 'e110de35a544a5efc968b75408fc2bd1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        var data = await response.json();
    
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity +'%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' kmph';
        
    
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        }else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';
        }else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        }else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
        }else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png';
        }else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png';
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

}

function Search() {
    const city = searchBox.value.trim();
    if (city === '') {
        alert('Enter city name');
    } else {
        checkWeather(city);
    }
}

searchBtn.addEventListener('click', Search);
searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        Search();
    }
});



