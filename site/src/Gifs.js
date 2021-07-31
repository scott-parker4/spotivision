import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/gifs.css';

export default function Gifs({ playingTrack, play }) {
  const [gifs, setGifs] = useState();
  const [gifInterval, setGifInterval] = useState(0);

  if (gifInterval >= gifs?.length - 1) setGifInterval(0);

  useEffect(() => {
    if (play) {
      const id = window.setInterval(() => {
        setGifInterval((gifInterval) => gifInterval + 1);
      }, 5000);
      return () => window.clearInterval(id);
    }
  }, [play]);

  useEffect(() => {
    if (!playingTrack) return;

    const artist = playingTrack.artist.split(' ').join('+');
    const title = playingTrack.title.split(' ').join('+');
    const combo = `${artist}+${title}`;
    const comboTrim = combo.length > 50 ? combo.substring(0, 50) : combo;

    console.log(artist, title, combo, comboTrim);

    const fetchGifs = async () => {
      const resultsArtist = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${artist}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const resultsTitle = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const resultsCombo = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${comboTrim}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
      );

      const combined = resultsCombo.data.data.concat(
        resultsTitle.data.data,
        resultsArtist.data.data
      );
      console.log(combined);
      setGifs(combined.sort((a, b) => 0.5 - Math.random()));
    };

    fetchGifs();
  }, [playingTrack]);

  console.log(gifInterval);

  return (
    <div className="gifs">
      {!play && (
        <img
          src="https://media.giphy.com/media/Ph0oIVQeuvh0k/giphy.gif"
          alt="static gif"
          className="playingGif"
        />
      )}
      {gifs !== undefined && play && (
        <img
          src={gifs[gifInterval].images.original.url}
          alt={playingTrack.title}
          className="playingGif"
        />
      )}
    </div>
  );
}
