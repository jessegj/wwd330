//instanstiate the classes of fetch and UI

const ft = new fetch();
const ui = new UI();


//add event listeners

const search = document.getElementById("searchCity");
const button = document.getElementById("search");


button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        //call UI
        ui.populateUI(data);

    });
});