const apiKey = "a0e794768c2fa80a066cea31ae8d0423";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
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
