const apiKey = "a0e794768c2fa80a066cea31ae8d0423";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy-weather.jpg"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy-weather.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear-weather.avif"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear-weather.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(input.value);
})

input.addEventListener("keyup", e=>{
    if(e.keyCode === 13){
       checkWeather(e.target.value);
       e.target.value="";
    }
})
