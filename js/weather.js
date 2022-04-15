
const API_KEY="4ccbbdea4dd97b5092c9ddf092582499";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data.name);
        city.innerText = data.name;
        weather.innerText = `${Math.floor(data.main.temp)} ${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);