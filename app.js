const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city_name) {
  const api_key = "bb046b36a07bd1e69f7e991cd19e2e2d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}m/s`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";
      document.getElementById("backgroundVideo").src =
        "https://www.youtube.com/watch?v=TMfNMN0RO60";


      break;
    case "Clear":
      weather_img.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png";
      document.getElementById("backgroundVideo").src =
        "/a/WhatsApp Video 2023-06-17 saat 17.42.08.mp4";

      break;
    case "Rain":
      weather_img.src =
        "https://cdn-icons-png.flaticon.com/512/4150/4150897.png";
        document.getElementById("backgroundVideo").src =
        "/a/Blue World Wild Life Day Banner (1).mp4";

      break;
    case "Mist":
      weather_img.src =
        "https://cdn-icons-png.flaticon.com/128/3313/3313998.png";
      document.body.style.backgroundImage =
        "url('https://c.stocksy.com/a/5Ef200/z9/635133.jpg')";

      break;
    case "Snow":
      weather_img.src =
        "https://cdn-icons-png.flaticon.com/128/2315/2315309.png";
      document.body.style.backgroundImage =
        "url('https://nainitaltourism.org.in/images/places-to-visit/headers/snow-view-point-nainital-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg')";

      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
