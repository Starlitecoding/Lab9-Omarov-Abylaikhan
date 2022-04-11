import React, {useState} from 'react';
import './App.css';

function App() {

const[weather, setWeather] = useState({});
const[city, setCity] = useState('');

const apiKey = 'e9a9dde999600c55e2a3de6638c14cf2' 

const getWeather = (e) =>{
  if(e.key ==='Enter') {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then (res => res.json ())
    .then(result => {
      setWeather(result);
      setCity('');
    })
  }
  
}

  return (
    <div className='app'>

      <div className="container">
      <input className="cityInput"
      type="text"
      placeholder='Search for a city...'
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyPress = {getWeather}
      />

{
  typeof weather.main != 'undefined'?
  (
  <div className="weather-container">

    <div className="location">
    <i class="fa-solid fa-city"></i> {weather.name} {weather.sys.country}
      </div>

  <div className='temp'>
  <i class="fa-solid fa-temperature-half"></i> {Math.round(weather.main.temp)} ℃
  </div>

<div className='weather'>
<i class="fa-solid fa-cloud-moon"></i> {weather.weather[0].main}
  </div>

  <div className='wind'>
  <i class="fa-solid fa-wind"></i> {weather.wind.speed} m/s
  </div>

      </div>)
      :
      (
      <div className="weather-container">
        <h1>Welcome to Weather on ReactJS</h1>
        </div>)
}

      </div>


    </div>
  );
}

export default App;
