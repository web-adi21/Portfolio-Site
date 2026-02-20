
let cityarray = [];
function addcity(event) {
  if (event.key === 'Enter') {
    let city = document.querySelector("#cityinput").value;
    if (city.trim() !== '') {
      cityarray.push(city);
      let cities = document.querySelector("#savedcitiesdiv");
      cities.innerHTML += `<div>${city}</div>`;
      document.querySelector("#cityinput").value = '';
    }
  }
}

let search = document.querySelector("#cityinput");
search.addEventListener("keydown" , addcity)