const city = document.getElementById('inputCity');
const btn = document.getElementById('searchBtn');




function getCoord (ville) {
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&appid=7ebd51d4b0d2f31095d48bb3d6a3a883`)
.then((response) => response.json())
.then((data) => console.log(data))
};

btn.addEventListener('click', () => {
    let cityName = city.value;
    return getCoord(cityName);
});



/* 
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ebd51d4b0d2f31095d48bb3d6a3a883`)
.then((reponse) => reponse.json())
.then((data) => console.log(data)) */

