var searchFormEl = document.querySelector("#citySearchForm");
var cityInputVal = document.querySelector("#inputCity");
var searchBtn = document.querySelector("#citySearch");
var usersCityListGroupEl = document.querySelector(".searchHistory");
var weatherContentDiv = document.querySelector("#weatherContent");
var cardDivEl = document.querySelector(".card");
var cardTitleEl = document.querySelector(".card-title");
var weatherIconEl = document.querySelector("#icon");
var uvIndexEl = document.querySelector("#uvIndex");
var openWeatherQueryUrl = "https://api.openweathermap.org/data/2.5/";
var apiKey = "ff06b6b44b565f8071bd33b5060e2c69";
var existingEntries = JSON.parse(localStorage.getItem("cities"));

// App on load
window.onload = function initializeDashboard() {
    if (localStorage.getItem("cities") !== null) {
        for (var i = 0; i < existingEntries.length; i++) {
            createNewCityButton(existingEntries[i], usersCityListGroupEl);
        }
    }
};

// Search function
function handleSearch(event) {
    event.preventDefault();
    var cityInput = cityInputVal.value.trim();

    if (!cityInput) {
        errorMessage("You must enter a valid city name", searchFormEl, 3000);
        return;
    } else {
        getCurrentWeather(cityInput, apiKey);
        getForecast(cityInput, apiKey);
        cityInputVal.value = "";
        weatherContentDiv.classList.add("hide");
    }
}

// Event listener
searchBtn.addEventListener("click", handleSearch);

