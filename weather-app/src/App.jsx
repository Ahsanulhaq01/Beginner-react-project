import React, { useState,useRef, useEffect }  from "react";
import sunImage from './assets/sun.png'
import cloudImage from './assets/cloud.png'
import { FiSearch } from "react-icons/fi";
import './App.css';
import { MdVisibility } from "react-icons/md";



function App(){
//  const [data ,setData] = useState()
  const [weather ,setWeather] = useState(JSON.parse(localStorage.getItem('weather')) || false);
  const [inputvalue ,setInputValue] = useState(JSON.parse(localStorage.getItem('inputvalue'))|| '');
  const [inputbox ,setInputBox] = useState(true);
  const refSearchButton = useRef(null);

  useEffect(()=>{
    localStorage.setItem('weather',JSON.stringify(weather))
  },[weather])

  useEffect(()=>{
    localStorage.setItem('inputvalue' ,JSON.stringify(inputvalue))
  },[inputvalue])

  async function getData(city){
    try{
          const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
        const response = await fetch(url);
        
      const data = await response.json();
      if(!response.ok){
          alert(data.message)
          return;
        }
        

      setWeather({
        temp : Math.floor(data.main.temp),
        humidity : data.main.humidity,
        wind : data.wind.speed,
        visibility : Math.floor((data.visibility)/1000),
        pressure : ((data.main.pressure)* 0.75006).toFixed(2),
        condition:data.weather[0].description,
        location : data.name
        // feel : Math.floor(data.main.feels_like),

      }) 
     
    }
    catch(error){
        alert(`Unexpected Error ${error}`)
      }
      
  }

  
  function handleSearchButton(){
    getData(inputvalue);
    setInputValue('');
  }
  function HandlekeyDown(event){
    if(event.key==='Enter'){
      refSearchButton.current.click();
      getData(inputvalue);
      setInputValue('');

      
    }
  }
  function handleOnChange(event){
    setInputValue((event.target.value).toUpperCase());
  }

  return(
    <div className="app-container">
    <div className="nav-container">
       <input onChange={handleOnChange} onKeyDown={HandlekeyDown} value={inputvalue} placeholder="Enter the city name" className="input-element"/>
      <button onClick={handleSearchButton}  ref={refSearchButton} className="search-button"><FiSearch size={18} className="search-button"/></button>
      
    </div>

    <div className="hero-section">
      <div className="city-info">
        <h2 className="city-name" > {weather.location}</h2>
      <p className="temp-value">{weather.temp}°C</p>
      </div>

      <div className="image-and-temp">
        {weather.condition === 'clear sky' ? <img src={sunImage} alt="weather-image" className="weather-image" /> : <img src ={cloudImage} alt = "weather-image" className="weather-image"/>}
        <p className="temp-description">{weather.condition}</p>

      </div>
    </div>

    <div className="below-section">
      <div className="uv-index gird-item">
        <p className="pressure-text">PRESSURE</p>
        <p className="pressure-value">{weather.pressure} mmHg</p>
      </div>

      <div className="wind gird-item">
          <p className="wind-text">WIND</p>
          <p className="wind-value">{weather.wind} km/h</p>

      </div>
      <div className="humidity gird-item">

        <p className="humidity-text">HUMIDITY</p>
        <p className="humidity-value">{weather.humidity}%</p>
      </div>
      <div className="visibility gird-item">
        <p className="visibility-text">VISIBILITY</p>
        <p className="visiblity-value">{weather.visibility} km</p>
      </div>
    </div>

    </div>
  )
}

export default App;