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

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.clouds.all;
    this.string.textContent = weather.main.temp;
    this.icon.textContent = weather.weather.icon;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Speed of wind: ${weather.wind.speed}  meter/sec`;
    this.current_weather.textContent = weather.weather.description;
  }
}