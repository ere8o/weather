class UI {
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.maxTemp = document.getElementById('w-max-temp')
        this.minTemp = document.getElementById('w-min-temp')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather){        
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = String(weather.weather[0].description).toUpperCase();
        this.string.textContent = this.kelvin2celcius(weather.main.temp);
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.maxTemp.textContent = `Max Temp: ${this.kelvin2celcius(weather.main.temp_max)}`;
        this.minTemp.textContent = `Min Temp: ${this.kelvin2celcius(weather.main.temp_min)}`;
        this.wind.textContent = `Wind: ${weather.wind.speed} Km/h`;
    }

    kelvin2celcius(kelvinDegrees){
        const celcius = kelvinDegrees - 273.15
        return `${celcius.toFixed(2)}°C`
    }
}