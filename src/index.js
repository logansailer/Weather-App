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
const location = document.querySelector("#location").value;

//renders current weather info to the DOM
function renderCurrent(weatherObject) {
  const today = (document.querySelector("#today").textContent = "Today is");
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
function currentWeatherProcessor(weatherData) {
  const usableData = {
    condition: weatherData.current.condition.text,
    feelsLikeF: Math.round(weatherData.current.feelslike_f),
    tempF: Math.round(weatherData.current.temp_f),
    uv: weatherData.current.uv,
    windMPH: Math.round(weatherData.current.wind_mph),
    location: weatherData.location.name.toUpperCase(),
  };

  if (weatherData.location.country === "United States of America") {
    usableData.region = weatherData.location.region.toUpperCase();
  } else {
    usableData.region = weatherData.location.country.toUpperCase();
  }

  return usableData;
}

//fetches current weather data from api and sends to other functions for processing/display
async function getCurrentData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7bf9ad50d4414a82a2024440241203&q=${location}`,
    {
      mode: "cors",
    }
  );
  const currentWeatherData = await response.json();
  console.log(currentWeatherData);
  const currentWeatherObject = currentWeatherProcessor(currentWeatherData);
  renderCurrent(currentWeatherObject);
}

//renders hourly info to the DOM
function renderHourly(weatherObject) {
  const today = (document.querySelector("#today").textContent = "Today is");
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

//processes hourly weather data to usable variables
function hourlyWeatherProcessor(weatherData) {
  const usableData = {
    condition: weatherData.current.condition.text,
    feelsLikeF: Math.round(weatherData.current.feelslike_f),
    tempF: Math.round(weatherData.current.temp_f),
    uv: weatherData.current.uv,
    windMPH: Math.round(weatherData.current.wind_mph),
    location: weatherData.location.name.toUpperCase(),
  };

  return usableData;
}

//fetches hourly weather data from api and sends to other functions for processing/display
async function getHourlyData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7bf9ad50d4414a82a2024440241203&q=${location}`,
    {
      mode: "cors",
    }
  );
  const hourlyData = await response.json();
  console.log(hourlyData);
  const hourlyWeatherObject = hourlyWeatherProcessor(hourlyData);
  renderHourly(hourlyWeatherObject);
}

getCurrentData(location);
getHourlyData(location);
