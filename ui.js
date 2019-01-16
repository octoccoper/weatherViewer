class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.current_weather = document.getElementById("w-weather");
    this.wind = document.getElementById("w-wind");
  }

  paint(data) {
    this.location.textContent = data.name;
    this.desc.textContent = `Cloudiness, ${data.clouds.all}%`;
    this.string.textContent = (5/9)*(Number(data.main.temp) - 32);
    this.icon.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`) ;
    this.humidity.textContent = `Relative humidity: ${data.main.humidity}`;
    this.wind.textContent = `Speed of wind: ${data.wind.speed}  meter/sec`;
    this.current_weather.textContent = `Weather description: ${data.weather[0].description}`;
  }
}