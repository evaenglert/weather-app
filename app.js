console.log("Hello world");

async function getWeatherFromLocation(location) {
  YOUR_API_KEY = 'f8f205b09395cd5cae91d8cab87adfca'
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${YOUR_API_KEY}`);
  response_json = await response.json();
  console.log(response_json.main.temp);
}

var search_button = document.querySelector(".search-btn");
search_button.addEventListener('click', () => {
  var location = document.querySelector("#location").value;
  getWeatherFromLocation(location);
})
