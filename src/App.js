import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=67394819506b1cd47610851c1b8b4c1a`

  const searchLocation = (event) => {
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const [data2,setData2] = useState({})


  const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0] ? data[0].lat:null}&lon=${data[0] ? data[0].lon:null}&appid=67394819506b1cd47610851c1b8b4c1a`

  const searchWeather = () => {
    axios.get(url2).then((response)=>{
      setData2(response.data)
      console.log(response.data)
    })
  }


  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location' 
        type="text"/>
      </div>

      <div className='container'> 

        <div className='top'>
          <div className='location'>
            {data[0] ? <p>{data[0].name}</p> : null}
          </div>

          <div className='temp'>
            {data2.main ? <h1>{data2.main.temp}</h1>:null}
          </div>

          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>

        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65°C</p>
            <p>Feels Like</p>
          </div>

          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>

          <div className='wind'>
            <p className='bold'>12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
