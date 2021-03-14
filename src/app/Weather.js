// métodos para poder obtener el clima, cambiar la localización para volver a obtener el clima etc
export class Weather {
    // se ejecuta apenas la clase es creada
    constructor (city, countryCode) {
        this.apiKey = 'b810c058f822851bd735ae4461dbab91';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather () {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI); // hacer peticiones
        const data = await response.json(); // convertir a json, también toma tiempo
        return data;
    }

    changeLocation (city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
        // save city and country code in local storage
    }
}