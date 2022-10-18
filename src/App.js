import './App.css';
import axios from 'axios';
import React, { useState } from 'react'

function App() {
  const [geo_data, setGeo_data] = useState({})
  const [location, setLocation] = useState('')
  // API for our project
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=91829c1123ad7833ce2918176a3d6de1`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setGeo_data(response.data)
        console.log(response.data)
      })
      setLocation('')

    }
  }
  
  return (
    <div className='container'>
      <div className='header'>
        <input 
          placeholder='Enter location' 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className='main'>
          {geo_data ? <p className='location'>{geo_data.name}</p>: null}
          {geo_data.main ? <p className='temp'>{geo_data.main.temp.toFixed()}°C</p> : null}
        <div className='side-text'>
          {geo_data.weather ? <p className=''>{geo_data.weather[0].main}</p>: null}
        </div>
      </div>
      <div className='footer'>
        <div className='text'>
          <p>Feels like</p>
          <p>Minimal temperature</p>
          <p>Maximal temperature</p>
        </div>
        <div className='text'>
          {geo_data.main ? <p className='temp-2 temp-center'>{geo_data.main.feels_like.toFixed()}°C</p>: null}
          {geo_data.main ? <p className='temp-2 temp-center'>{geo_data.main.temp_min.toFixed()}°C</p>: null}
          {geo_data.main ? <p className='temp-2'>{geo_data.main.temp_max.toFixed()}°C</p>: null}
        </div>
      </div>
    </div>
  );
}

export default App;
