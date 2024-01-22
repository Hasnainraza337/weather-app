
let APIKEY = import.meta.env.VITE_API_KEY;
let APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let weatherIcon = document.querySelector(".weather-icon");

// weather api
const weatherCondition = async (city) => {
    try {
        const response = await fetch(APIURL + city + `&appid=${APIKEY}`)
        const data = await response.json()
        document.querySelector(".condition").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-icon").innerHTML = '<img class="w-10" src="/assets/icons/humidity.png">';
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".hum-name").innerHTML = "Humidity"
        document.querySelector(".wind-icon").innerHTML = ' <img class="w-10" src="/assets/icons/wind.png">';
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
        document.querySelector(".wind-name").innerHTML = "Wind Speed";


        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/assets/icons/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/assets/icons/clouds.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/assets/icons/deizzle.png"
        }
        else if (data.weather[0].main == "Fog") {
            weatherIcon.src = "/assets/icons/fog.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/assets/icons/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/assets/icons/rain.png"
        }
        else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "/assets/icons/smoke.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "/assets/icons/snow.png"
        } else {
            weatherIcon.src = "/assets/icons/clear.png"
        }


    } catch (error) {
        console.log(error)
    }
}

// search button function
const Search =  () => {
    let inputValue = document.getElementById("input").value;
    inputValue = inputValue.trim()
    if (inputValue === "") {
        return alert("Please Enter Your City Name");
    }
     weatherCondition(inputValue);
    return document.getElementById("input").value = "";
}

document.querySelector("button").addEventListener("click", Search)