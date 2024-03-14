import "./styles.css";
/*
creative idea SUNSCREEN: calculate sunscreen with UV data
*/

//renders current weather info to the DOM
function renderWeather(weatherObject) {
  document.querySelector(
    "#location"
  ).textContent = `${weatherObject.location}, ${weatherObject.region}`;
  document.querySelector("#condition").textContent = weatherObject.condition;
  document.querySelector("#temp-today").textContent = weatherObject.tempF;
  document.querySelector(
    "#feels-like"
  ).textContent = `Feels like: ${weatherObject.feelsLikeF}`;
  document.querySelector(
    "#wind"
  ).textContent = `Wind: ${weatherObject.windMPH} MPH`;
  document.querySelector("#uv").textContent = `UV Index: ${weatherObject.uv}`;
  //iterates over each hour and dynamically adds to DOM
  for (let i = 1; i < 6; i++) {
    document.querySelector(`#temp-${i}`).textContent = Math.round(
      weatherObject.hour[i].temp_f
    );
    document.querySelector(`#cond-${i}`).textContent =
      weatherObject.hour[i].condition.text;
  }
}

//processes current weather data to usable variables
function weatherProcessor(weatherData) {
  const currentTime = new Date(
    new Date().toLocaleString("en-US", { timeZone: weatherData.location.tz_id })
  ).getHours();
  const usableData = {
    condition: weatherData.current.condition.text,
    feelsLikeF: Math.round(weatherData.current.feelslike_f),
    tempF: Math.round(weatherData.current.temp_f),
    uv: weatherData.current.uv,
    windMPH: Math.round(weatherData.current.wind_mph),
    location: weatherData.location.name.toUpperCase(),
    hour: {
      1: weatherData.forecast.forecastday[0].hour[currentTime + 1],
      2: weatherData.forecast.forecastday[0].hour[currentTime + 2],
      3: weatherData.forecast.forecastday[0].hour[currentTime + 3],
      4: weatherData.forecast.forecastday[0].hour[currentTime + 4],
      5: weatherData.forecast.forecastday[0].hour[currentTime + 5],
    },
  };
  //sets region based on in US vs outside US
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
  const weatherObject = weatherProcessor(weatherData);
  renderWeather(weatherObject);
}

function getLocation() {
  const userLocation =
    document.querySelector("#get-location").value || "New York";
  getWeatherData(userLocation);
}

function submitLocation(e) {
  e.preventDefault();
  getLocation();
}

const form = document.querySelector("form");
const submit = document.querySelector("#submit");
form.addEventListener("submit", submitLocation);
submit.addEventListener("click", submitLocation);
getLocation();
