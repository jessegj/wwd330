class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {
        //de-structure vars(this means to extract data from arrays, objects and maps
        //we will be using this to add information to our HTML)

        this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">A High of ${data.main.temp_max}. A Low of ${data.main.temp_min}</h6>
                <p>class="card-text ">Weather conditions are: ${data.weather[0].description}</p>
            </div>
        </div>        
        `;
    }
}