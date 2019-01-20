// Initialize Storage object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();


// Initialize weather object
const weather = new Weather(weatherLocation.city);

// Initialize ui object
const ui = new UI();


// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Modal window for change location. Event listener for the button. 
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  // Change location in ui
  weather.changeLocation(city);

  // Save location to LocalStorage
  storage.setLocationData(city);

  // Display the weather
  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err))
}