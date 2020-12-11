/*const page = document.querySelector(".top");

const apiKey = "44c7075120dfb5ca7bd962668c46fd68";

page.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
        })
});*/

class fetch {
    async getCurrent(input) {
        const apiKey = "44c7075120dfb5ca7bd962668c46fd68";

        //request to URL

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);

        const data = await response.json();

        console.log(data);

        return data;
    }
}
