// const weatherURL = "./data/3dayweather.json"
const LAT =  33.158092;
const LON =  -117.350594;
const APIKEY = "fe5a6cbd4b382d87ec49b7bb4fa3ecad";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function showForecast(forecasts){
    // Get dates for next three days
    console.log(forecasts);
    let dates = []
    let mydate = new Date();
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONE_DAY)
        nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }

    // Find the object with the weather condition at 9:00 AM for each day
    forecastData = dates.map((date) => {
      const forecastForDay = forecasts.filter(x => x.dt_txt.startsWith(date));

      // Assuming that the forecasts are available at 3-hour intervals
      const forecastAt9AM = forecastForDay.find(entry => entry.dt_txt.includes('09:00:00'));

      return {
          date,
          description: forecastAt9AM.weather[0].description,
          icon: forecastAt9AM.weather[0].icon
      };
  });


    // Add the forecast information to the HTML document
    let weatherElt = document.getElementById("weather-forecast");
    forecastData.forEach(data => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `<h2>${data.date}</h2><p>${data.description}</p><img src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather Icon">`;
        weatherElt.append(newsection);
    });    
}

async function fetchForecast() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();        
        showForecast(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

fetchForecast()