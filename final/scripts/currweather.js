const currentTempp = document.querySelector('#current-temp');
const weatherIconn = document.querySelector('#weather-icon');
const captionDescr = document.querySelector('figcaption');
const humidity     = document.querySelector('#humidity');

const LAT1 = 33.158092;
const LON1 = -117.350594;
const APIKEYY = "fe5a6cbd4b382d87ec49b7bb4fa3ecad";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT1}&lon=${LON1}&appid=${APIKEYY}&units=imperial`;

function displayResults(data) {
    currentTempp.innerHTML = `${data.main.temp}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIconn.setAttribute('src', iconsrc);
    weatherIconn.setAttribute('alt', desc);
    captionDescr.textContent = `${desc}`;
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();