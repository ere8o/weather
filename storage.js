class Storage {
    constructor() {
        this._city;
        this.defaultCity = 'Guadalajara';
    }

    get city() {
        if (localStorage.getItem('city') === null) {
            this._city = this.defaultCity;
        } else {
            this._city = localStorage.getItem('city')
        }
        return this._city;
    }

    set city(city) {
        localStorage.setItem('city', city);
        this._city = city;
    }

}