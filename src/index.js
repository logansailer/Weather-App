import "./styles.css";

//determines if sunscreen is needed based on epa.gov's recommendations
function sunWarning(uv) {
  if (uv === 0) {
    return "You don't need to apply sunscreen right now, but this may change later in the day";
  } else if (0 < uv && uv <= 2.9) {
    return "Sunscreen may not be needed at the moment. Radiation is low enough that you can safely go outside without protection, but sun protection should still be considered. This may change throughout the day.";
  } else if (2.9 < uv && uv <= 5) {
    return "You should apply sunscreen before going outside. Seek shade when sun is most intense.";
  } else if (5 < uv && uv <= 10) {
    return "Sunscreen is necessary before going outside. Protective clothing and sunglasses may also be necessary. Reapply sunscreen often.";
  } else if (10 < uv && uv <= 11) {
    return "Going outside for long periods is ill-advised. If outside, sunscreen and sun protective clothing are absolutely necessary.";
  }
}

//renders current weather info to the DOM
function renderWeather(weatherObject) {
  document.querySelector(
    "#location"
  ).textContent = `${weatherObject.location}, ${weatherObject.region}`;
  document.querySelector("#condition").textContent = weatherObject.condition;
  document.querySelector("#temp-today").textContent = `${weatherObject.tempF}°`;
  document.querySelector(
    "#feels-like"
  ).textContent = `Feels like: ${weatherObject.feelsLikeF}°`;
  document.querySelector(
    "#wind"
  ).textContent = `Wind: ${weatherObject.windMPH} MPH`;
  document.querySelector("#uv").textContent = `UV Index: ${weatherObject.uv}`;
  document.querySelector("#warning").textContent = sunWarning(weatherObject.uv);
  //iterates over each hour and dynamically adds to DOM
  for (let i = 1; i < 6; i++) {
    document.querySelector(`#time-${i}`).textContent =
      weatherObject.hour[i].time.slice(11);
    document.querySelector(`#temp-${i}`).textContent = `${Math.round(
      weatherObject.hour[i].temp_f
    )}°`;
    document.querySelector(`#cond-${i}`).textContent =
      weatherObject.hour[i].condition.text;
  }
}

function checkHour(currentTime, timeAdded) {
  if (currentTime + timeAdded > 23) {
    return currentTime;
  } else {
    return currentTime + timeAdded;
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
    //checks if data can be pulled from forecast data (within 24 hours of start)
    hour: {
      1: weatherData.forecast.forecastday[0].hour[checkHour(currentTime, 1)],
      2: weatherData.forecast.forecastday[0].hour[checkHour(currentTime, 2)],
      3: weatherData.forecast.forecastday[0].hour[checkHour(currentTime, 3)],
      4: weatherData.forecast.forecastday[0].hour[checkHour(currentTime, 4)],
      5: weatherData.forecast.forecastday[0].hour[checkHour(currentTime, 5)],
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
