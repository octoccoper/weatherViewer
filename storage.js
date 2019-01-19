class Storage { 
  constructor() { 
    this.city;
    this.defaultCity = "London";
  }

  getLocationData() {
    if ((localStorage.getItem("city") === null) && (localStorage.getItem("city") === undefined)) {
      this.city = this.defaultCity;
    } else { 
      this.city = localStorage.getItem("city");
    }
    return {
      city: this.city
    }
   }

  setLocationData() { 
    localStorage.setItem("city", this.city);
  }
}