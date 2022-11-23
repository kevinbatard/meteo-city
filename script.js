const city = document.getElementById('inputCity');
const btn = document.getElementById('searchBtn');
const form = document.getElementById('formu');



function getCoord (userVille) {
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userVille},FR&limit=1&appid=7ebd51d4b0d2f31095d48bb3d6a3a883`)
.then((response) => response.json())
.then((data) => meteo(data[0].lat, data[0].lon))
displayVille (userVille);

};

btn.addEventListener('click', () => {
    let cityName = city.value;
    return getCoord(cityName);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let cityName = city.value;
    return getCoord(cityName);
});

function meteo (lat, lon) {
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ebd51d4b0d2f31095d48bb3d6a3a883&units=metric`)
.then((reponse) => reponse.json())
.then((data) => displayData (data)) }


function displayData(data) {
document.getElementById('icone').setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
console.log(data.main.temp)
console.log(data.main.feels_like)
console.log(data.main.temp_min)
console.log(data.main.temp_max)
console.log(data.wind.deg)
console.log(data.wind.speed)
console.log(data.main.humidity)
};

function displayVille (userVille) {
    const userCity = document.getElementById('ville');
    const random = document.createElement('p');
    userCity.appendChild(random);
    userCity.textContent= userVille;
}

