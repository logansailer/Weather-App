import "./styles.css";

/*
set default data for app
get data fromm user
send it to api request
get data I want
display it on the page
creative idea SUNSCREEN: calculate sunscreen with UV data
*/
const location = document.querySelector("#location").value;
const today = document.querySelector("#today");
const tempToday = document.querySelector("#temp-today");

//uses variables to render data on page
function renderPage() {}

//processes weather data to usable variables
function weatherProcessor(weatherData) {
  const usableData = {
    condition: weatherData.current.condition.text,
    feelsLikeF: weatherData.current.deelslike_f,
    tempF: weatherData.current.temp_f,
    uv: weatherData.current.uv,
    windMPH: weatherData.current.wind_mph,
    location: weatherData.location.name.toUpperCase(),
  };

  if (weatherData.location.country === "United States of America") {
    usableData.region = weatherData.location.region.toUpperCase();
  } else {
    usableData.region = weatherData.location.country.toUpperCase();
  }

  return usableData;
}

//fetches weather data from api and sends to other functions for display/processing
async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7bf9ad50d4414a82a2024440241203&q=${location}`,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  const processedWeather = weatherProcessor(weatherData);
  renderPage(processedWeather);
}

getWeatherData(location);
