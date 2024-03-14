import "./styles.css";

/*
set default data for app
get data fromm user
send it to api request
get data I want
display it on the page
creative idea SUNSCREEN: calculate sunscreen with UV data
*/
//gets default location to use on load
const userLocation = document.querySelector("#get-location").value;

//renders current weather info to the DOM
function renderWeather(weatherObject) {
  const locationToday = (document.querySelector("#location").textContent =
    weatherObject.location);
  const conditionToday = (document.querySelector("#condition").textContent =
    weatherObject.condition);
  const tempToday = (document.querySelector("#temp-today").textContent =
    weatherObject.tempF);
  const feelsLike = (document.querySelector(
    "#feels-like"
  ).textContent = `Feels like: ${weatherObject.feelsLikeF}`);
  const wind = (document.querySelector(
    "#wind"
  ).textContent = `Wind: ${weatherObject.windMPH} MPH`);
  const uv = (document.querySelector(
    "#uv"
  ).textContent = `UV Index: ${weatherObject.uv}`);
}

//processes current weather data to usable variables
function weatherProcessor(weatherData) {
  const currentTime = new Date().getHours();
  console.log(currentTime);
  const usableData = {
    condition: weatherData.current.condition.text,
    feelsLikeF: Math.round(weatherData.current.feelslike_f),
    tempF: Math.round(weatherData.current.temp_f),
    uv: weatherData.current.uv,
    windMPH: Math.round(weatherData.current.wind_mph),
    location: weatherData.location.name.toUpperCase(),
    hour1: weatherData.forecast.forecastday[0].hour[currentTime + 1],
    hour2: weatherData.forecast.forecastday[0].hour[currentTime + 2],
    hour3: weatherData.forecast.forecastday[0].hour[currentTime + 3],
    hour4: weatherData.forecast.forecastday[0].hour[currentTime + 4],
    hour5: weatherData.forecast.forecastday[0].hour[currentTime + 5],
  };
    console.log(usableData.hour5)
  if (weatherData.location.country === "United States of America") {
    usableData.region = weatherData.location.region.toUpperCase();
  } else {
    usableData.region = weatherData.location.country.toUpperCase();
  }

  return usableData;
}

//fetches current weather data from api and sends to other functions for processing/display
async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=7bf9ad50d4414a82a2024440241203&q=${location}`,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  const weatherObject = weatherProcessor(weatherData);
  renderWeather(weatherObject);
}

getWeatherData(userLocation);
