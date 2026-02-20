const apiKey = "db5784df224561944d9baad2618d4461";
let cityarray = [];


async function updateWeather(city) {
   
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
       
        const res = await fetch(currentUrl);
        const currentData = await res.json();

        const lat = currentData.coord.lat;
        const lon = currentData.coord.lon;


        const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const resAqi = await fetch(aqiUrl);
        const aqiData = await resAqi.json();


        const aqiLevel = aqiData.list[0].main.aqi;


        const aqiText = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
        document.getElementById("aqidiv").innerText = aqiText[aqiLevel - 1];
      
        const resForecast = await fetch(forecastUrl);
        const forecastData = await resForecast.json();

    
        document.getElementById("citynamediv").innerText = currentData.name;
        document.getElementById("tempinfodiv").innerText = `${Math.round(currentData.main.temp)}°C`;
        document.getElementById("humiditydiv").innerText = `${currentData.main.humidity}%`;
        document.getElementById("winddiv").innerText = `${currentData.wind.speed} km/h`;

      
        const daily = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
        const dayElements = document.querySelectorAll(".day");

        daily.forEach((data, index) => {
            if (index < dayElements.length) {
                const date = new Date(data.dt * 1000);
                const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                const temp = Math.round(data.main.temp);
                const icon = data.weather[0].icon;

                dayElements[index].innerHTML = `
                    <p>${dayName}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" width="40px">
                    <p>${temp}°C</p>
                `;
            }
        });
      
        document.getElementById("citynamediv").innerText = currentData.name;
        document.getElementById("tempinfodiv").innerText = `${Math.round(currentData.main.temp)}°C`;

        
        const mainIconCode = currentData.weather[0].icon;
        const mainIconTag = document.getElementById("weathericon");

        mainIconTag.src = `https://openweathermap.org/img/wn/${mainIconCode}@4x.png`;
        mainIconTag.style.display = "block";
    } catch (err) {
        alert("Enter a valid city name!");
    }
}


document.getElementById("cityinput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") updateWeather(e.target.value);
});



function updateUI(data) {
   
    document.getElementById("citynamediv").innerText = data.name;
    document.getElementById("tempinfodiv").innerText = `${Math.round(data.main.temp)}°C`;

  
    document.getElementById("humiditydiv").innerText = `${data.main.humidity}%`;
    document.getElementById("winddiv").innerText = `${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon; 

    
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  
    document.getElementById("weathericon").src = iconUrl;

 
    document.getElementById("weathericon").alt = data.weather[0].description;
}



async function addcity(event) {
  if (event.key === 'Enter') {
    let city = document.querySelector("#cityinput").value;
    if (city.trim() !== '') {
      const data = await updateWeather(city); 
      if (data) {
        cityarray.push(city);
        let cities = document.querySelector("#savedcitiesdiv");
        cities.innerHTML += `<div>${data.name}: ${Math.round(data.main.temp)}°C</div>`;
        document.querySelector("#cityinput").value = '';
      }
    }
  }
}

let search = document.querySelector("#cityinput");
search.addEventListener("keydown" , addcity)




