document.addEventListener("DOMContentLoaded", () => {
    const city = document.getElementById("city");
    console.log(city.value.trim())

    const weatherList = {
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Rain: "🌧️",
    Snow: "❄️",
    Clear: "☀️",
    Clouds: "☁️",
    Atmosphere: "🌫️",
    Mist: "🌫️",
    Dust: "😷"
    };

    findWeather(city.value)  

    async function findWeather(city) {
        try {
            const weatherData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=94f6b80bcd0121c7503ef078bfaa74ff`)
        const data = await weatherData.json();
        if(data.cod !== 200){
            alert(data.message);
            return;
        }

        document.getElementById("weather").textContent = data.weather[0].main;
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent =
                `Temperature: ${(data.main.temp - 273.15).toFixed(1)}°C`;
            document.getElementById("description").textContent =
                `Description: ${data.weather[0].description}`;
            document.getElementById("humidity").textContent =
                `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent =
                `Wind-speed: ${data.wind.speed} km/h`;
            document.getElementById("weather-pic").textContent =
                weatherList[data.weather[0].main];
        
            
        } catch (error) {
            alert("Error fetching weather")
        }
        
    }

    document.getElementById("search").addEventListener("click", () => {
        findWeather(city.value.trim())
    })
    
})


