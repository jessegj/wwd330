
class Fetch {
    async getCurrent(input) {
        const apiKey = "44c7075120dfb5ca7bd962668c46fd68";

        //request to URL

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=imperial`);

        const data = await response.json();

        return data;
    }
}

//UI class

class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
    }

    populateUI(data) {
        //de-structure vars(this means to extract data from arrays, objects and maps
        //we will be using this to add information to our HTML)

        this.uiContainer.innerHTML = `
        
        <div class="masterConditions">
            <div class="conditions">
                <h5>${data.name}</h5>
                <h6>A High of ${data.main.temp_max} and a Low of ${data.main.temp_min}</h6>
                <p> Weather conditions are: ${data.weather[0].description}</p>
            </div>
        </div>        
        `;
    }
    localStore (data) {
        localStorage.setItem("city", "data");
    }
    removeStore(data) {
        localStorage.removeItem("data");
    }
}

//app class

//instanstiate the classes of fetch and UI

const ft = new Fetch();
const ui = new UI();


//add event listeners

const search = document.getElementById("searchCity");
const button = document.getElementById("search");


button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        //call UI
        console.log(data);
        ui.populateUI(data);

    });
});