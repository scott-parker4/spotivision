import React, { useState } from 'react'
import axios from 'axios'
import Login from './Login'
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get('code')


function App() {

/* const [ gifs, setGifs ] = useState()

const fetchGifs = async () => {
  const results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=5`)
  setGifs(results.data.data)
}

const handleClick = function () {
  fetchGifs()
} */

// console.log(gifs)
  return (
    
    <div className="App">
      { code ? <Dashboard code={code} /> : <Login /> }
      <p>hi</p>
  {/*  <button onClick={handleClick}>gif</button>
    {gifs !== undefined && <img src={gifs[0].images.fixed_height.url} />} */}
    </div>
  );
}

export default App;
