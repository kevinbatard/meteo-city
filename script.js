const city = document.getElementById('inputCity');
const btn = document.getElementById('searchBtn');
const form = document.getElementById('formu');


btn.addEventListener('click', () => {
    let userVille = city.value;
    popIcon ()
    return meteo(userVille);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let userVille = city.value;
    popIcon ()
    return meteo(userVille);
});

function meteo (userVille) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userVille}&appid=7ebd51d4b0d2f31095d48bb3d6a3a883&units=metric`)
.then((reponse) => reponse.json())
.then((data) => displayData (data))
displayVille (userVille); 
};


function displayData(data) {
document.getElementById('icone').setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
document.getElementById('affiTemp').textContent= Math.floor(data.main.temp + 0.5)
document.getElementById('affiFeel').textContent= Math.floor(data.main.feels_like + 0.5);
document.getElementById('affiTempMin').textContent= Math.floor(data.main.temp_min + 0.5);
document.getElementById('affiTempMax').textContent= Math.floor(data.main.temp_max + 0.5);
document.getElementById('affiSens').textContent=Math.floor(data.wind.deg + 0.5);
document.getElementById('affiVit').textContent= Math.floor(data.wind.speed + 0.5);
document.getElementById('humi').textContent= Math.floor(data.main.humidity + 0.5);
};

function displayVille (userVille) {
    const userCity = document.getElementById('ville');
    const random = document.createElement('p');
    userCity.appendChild(random);
    userCity.textContent= userVille;
}

function popIcon () {
    document.getElementById('ico1').classList.remove('invisible');
    document.getElementById('ico2').classList.remove('invisible');
    document.getElementById('ico3').classList.remove('invisible');
    document.getElementById('ico4').classList.remove('invisible');
    document.getElementById('ico5').classList.remove('invisible');
    document.getElementById('hideText').classList.remove('invisible');
    document.getElementById('hideText2').classList.remove('invisible');
    document.getElementById('hideText3').classList.remove('invisible');
    document.getElementById('hideText4').classList.remove('invisible');
    document.getElementById('hideText5').classList.remove('invisible');
    document.getElementById('hideText6').classList.remove('invisible');
    document.getElementById('hideText7').classList.remove('invisible');
}
