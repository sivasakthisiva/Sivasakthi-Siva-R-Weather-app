 const API_KEY = "2ae80f4fd4751d802eb4ad4850eee619";

        async function getWeather() {
            const city = document.getElementById("city").value;
            const weatherInfo = document.getElementById("weather-info");
            const errorMessage = document.getElementById("error-message");
            
            if (!city) {
                errorMessage.textContent = "Please enter a city name.";
                return;
            }
            
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
                );
                const data = await response.json();

                if (response.ok) {
                    weatherInfo.innerHTML = `
                        <h3>${data.name}</h3>
                         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>${data.weather[0].description}</p>
                    `;
                    errorMessage.textContent = "";
                } else {
                    errorMessage.textContent = "City not found. Please try again.";
                    weatherInfo.innerHTML = "";
                }
            } catch (error) {
                errorMessage.textContent = "Failed to fetch weather data.";
            }
        }