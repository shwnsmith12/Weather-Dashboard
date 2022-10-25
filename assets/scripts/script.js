/* variable below for "weather" saves my API key to a variable, and
fetches the information from the Open Weather Map API
It then pulls the information of the "city" the user will search
pull that information out in imperial units and adds my API key
*/
var weather = {
    apiKey: "2ca934c1e8f394022f402abb8aac501e",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=imperial&appid=" 
        + this.apiKey
        )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
    },

/*
below I've created a function that will select the data we have chosen
from the API and calls in to the corresponding places in the HTML
to display the city name, an icon, description of the weather,
temperature, humidity, and wind speed.
Also added a cool feature to select a random image from unsplash
based off of the searched city
*/
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name + " on:";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// add event listener for clicking the search button
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

// add another event listener in case user submits via the enter
// button
document.querySelector(".search-bar").addEventListener("keyup", function (event){
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Austin" );


// adds date to Current City Card
var currentDay = moment().format('dddd, MMM Do, YYYY');
  $("#currentDay").html(currentDay);

  $(document).ready(function () {
            
// element to locally store the time and text
localStorage.setItem(time);
})
