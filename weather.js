class Weather {
    constructor(city) {
        this.apiKey = 'b9f05853cf46241a69d8ef955424ff26';
        this._city = city;
        this._requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${this._city}&appid=${this.apiKey}`;
    }

    get city() {
        return this._city;
    }

    set city(newCity) {
        this._city = newCity;
    }

    get requestURL() {
        return this._requestURL;
    }

    set requestURL(newCity) {
        this._requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${this.apiKey}`
    }

    // Fetch weather from API
    async getWeather() {
        this.requestURL = this.city;
        const weatherResponse = await fetch(this.requestURL);
        const weatherData = await weatherResponse.json();
        return weatherData
    }
}