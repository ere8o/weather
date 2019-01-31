// Instantiate storage object
const storage = new Storage();
const city = storage.city;
// Instantiate weather object
let weather = new Weather(city);
// Instantiate UI object
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

// Change location event
document.getElementById('w-change-button').addEventListener('click',(e) => {
    const newCity = document.getElementById('city').value;
    console.log(newCity);
    storage.city = newCity;
    weather = new Weather(storage.city);
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
    .then((data) => {
        ui.paint(data)
    })
    .catch((err) => {
        console.log(err);
    })
}
