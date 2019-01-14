class Weather { 
  constructor(city) { 
    this.apiKey = "ec71ce1890451ea910fd66a105268942";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() { 
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) { 
    this.city = city;
  }
}
