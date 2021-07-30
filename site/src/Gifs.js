import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Gifs({ playingTrack, play }) {
  const [gifs, setGifs] = useState();
  const [gifInterval, setGifInterval] = useState(0);

  useEffect(() => {
    if (!playingTrack) return;

    const artist = playingTrack.artist.split(' ').join('+');
    const title = playingTrack.title.split(' ').join('+');
    const combo = artist.concat(title);

    const fetchGifs = async () => {
      const resultsArtist = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${artist}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const resultsTitle = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const resultsCombo = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${combo}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const combined = resultsCombo.data.data.concat(
        resultsTitle.data.data,
        resultsArtist.data.data
      );
      setGifs(combined.sort((a, b) => 0.5 - Math.random()));
    };

    fetchGifs();
  }, [playingTrack]);

  /* const gifPlay = () => {
    if (!play) return
    if (gifInterval === gifs.length ) setGifInterval(0)
    setGifInterval(gifInterval + 1)
}

setInterval(gifPlay, 5000) */
  // console.log(gifInterval)

  return (
    <div>
      {!play && (
        <img src="https://media.giphy.com/media/Ph0oIVQeuvh0k/giphy.gif" />
      )}
      {gifs !== undefined && play && (
        <img src={gifs[gifInterval].images.fixed_height.url} />
      )}
    </div>
  );
}
