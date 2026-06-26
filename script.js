const apiKey = "b22a88f326e77505054a34442d4791e2";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");

async function getWeather(city) {

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            alert("city not found");
            return;
        }

        const data = await response.json();

        document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("description").innerHTML =
        data.weather[0].description;

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        document.getElementById("icon").src =
        "https://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        "@2x.png";

    }catch(error){
        alert("Something went wrong.");
    }
}

searchBtn.addEventListener("click",()=>{

    const city = cityInput.value.trim();

    if(city===""){
        alert("Enter a city name");
        return;
    }

    getWeather(city);

});

cityInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        searchBtn.click();
    }

});