import "./styles.css";

/*
set default data for app
get data fromm user
send it to api request
get data I want
display it on the page
*/
const location = document.querySelector("#location").value;
const today = document.querySelector("#today");
const tempToday = document.querySelector("#temp-today");

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7bf9ad50d4414a82a2024440241203&q=${location}`,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}
function renderPage() {}

getWeatherData(location);
