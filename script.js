const apiKey = "a0e794768c2fa80a066cea31ae8d0423";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
const response = await fetch (apiUrl + city + `&appId = ${apiKey}`);
var data = await response.json();

console.log(data)
}