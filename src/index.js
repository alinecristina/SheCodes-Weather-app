//Date Function
let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getUTCMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector("h2");
h2.innerHTML = `${weekday} ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-location");
  cityname.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}
let form2 = document.querySelector("#city-search");
form2.addEventListener("submit", search);

//Search City Api
function searchCity(city) {
  let apiKey = "e225c6d111cb3447388ed224dda3872f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showRealTemp);
}

function showRealTemp(response) {
  console.log(response.data);
  document.querySelector("#cityname").innerHTML = response.data.name;
  document.querySelector("#temperature-now-c").innerHTML = Math.round(
    response.data.main.temp
  );
}

//Unit Function
function TemperatureCelcius(event) {
  event.preventDefault();
  let temperatureC = document.querySelector(".temperature-now-c");
  temperatureC.innerHTML = "13";
}

let convertionC = document.querySelector("#celc-temp");
convertionC.addEventListener("click", TemperatureCelcius);

function TemperatureFahrenheit(event) {
  event.preventDefault();
  let temperatureF = document.querySelector(".temperature-now-c");
  temperatureF.innerHTML = "55";
}

let convertionF = document.querySelector("#fahr-temp");
convertionF.addEventListener("click", TemperatureFahrenheit);
