// usar los id definidos en html para luego cambiar el contenido con el obtenido de la api
export class UI {
    constructor () {
        this.weatherLocation = document.getElementById('weather-location');
        this.weatherDescription = document.getElementById('weather-description');
        this.weatherString = document.getElementById('weather-string');
        this.weatherHumidity = document.getElementById('weather-humidity');
        this.weatherWind = document.getElementById('weather-wind');
    }

    render (weather) {
        this.weatherLocation.textContent = weather.name + ' / ' + weather.sys.country;
        this.weatherDescription.textContent = weather.weather[0]['description'];
        this.weatherString.textContent = weather.main.temp + ' °C';
        this.weatherHumidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
        this.weatherWind.textContent = 'Speed: ' + weather.wind.speed + ' m/s';
    }
}