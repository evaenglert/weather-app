console.log("Hello world");

function getWeatherFromLocation(location, YOUR_API_KEY) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${YOUR_API_KEY}`)
    .then(function(response) {
      return response.json()
    })
}

async function getWeatherFromLocation(location, YOUR_API_KEY) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${YOUR_API_KEY}`)
  return response.json()

}

// async function formatWeatherData(response) {
//   response
// }
