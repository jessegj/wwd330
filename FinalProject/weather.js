function cityName() {

let input = document.getElementById('city').value;

const apiURL = 'api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=44c7075120dfb5ca7bd962668c46fd68'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentCondition = document.querySelector('#condition')
        const temp = document.querySelector('#temp');
        const humid = document.querySelector('#humid');
        const wind = document.querySelector('#wind');
        const icon = document.querySelector('#icon');

        currentCondition.textContent = jsObject.weather[0].description;
        temp.textContent = jsObject.main.temp.toFixed(0);
        humid.textContent = jsObject.main.humidity.toFixed(0);
        wind.textContent = jsObject.wind.speed.toFixed(0);

    })};
