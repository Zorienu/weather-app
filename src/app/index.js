const { Weather } = require('./Weather'); // importar una clase directamente
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const {city, countryCode} = store.getLocation();
const ui = new UI();
const weather = new Weather(city, countryCode);
require('./index.css');

// obtener el clima
async function fetchWeather () {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

const form = document.getElementById('w-change-btn');
form.addEventListener('click', async (e) => {
    e.preventDefault();
    const idCity = document.getElementById('city');
    const idCountryCode = document.getElementById('countryCode');
    console.log(idCity.value);
    weather.changeLocation(idCity.value, idCountryCode.value);
    store.setLocation(idCity.value, idCountryCode.value);
    fetchWeather();
    idCity.value = '';
    idCountryCode.value = '';
})

// saber cuando el contenido ha sido cargado y ejecutar fetchWeather
document.addEventListener('DOMContentLoaded', fetchWeather); 