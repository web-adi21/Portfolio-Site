const apiKey = "db5784df224561944d9baad2618d4461";
let cityarray = [];
async function fetchWeather(city) {
    // 1. Construct the URL (we add '&units=metric' to get Celsius)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url); // Send the request
        const data = await response.json(); // Convert response to a JS object

        if (response.ok) {
           updateUI(data);
           return data;
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}



function updateUI(data) {
    // Main Temperature and City
    document.getElementById("citynamediv").innerText = data.name;
    document.getElementById("tempinfodiv").innerText = `${Math.round(data.main.temp)}°C`;

    // Humidity and Wind (The IDs from your HTML)
    document.getElementById("humiditydiv").innerText = `${data.main.humidity}%`;
    document.getElementById("winddiv").innerText = `${data.wind.speed} m/s`;

    // Weather Icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // Add an <img> inside your tempdiv or use a background-image update
}



async function addcity(event) {
  if (event.key === 'Enter') {
    let city = document.querySelector("#cityinput").value;
    if (city.trim() !== '') {
      const data = await fetchWeather(city);  // Wait for the data
      if (data) {
        cityarray.push(city);
        let cities = document.querySelector("#savedcitiesdiv");
        // Display city name with temperature
        cities.innerHTML += `<div>${data.name}: ${Math.round(data.main.temp)}°C</div>`;
        document.querySelector("#cityinput").value = '';
      }
    }
  }
}

let search = document.querySelector("#cityinput");
search.addEventListener("keydown" , addcity)




