import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import Gifs from './Gifs';
import './css/player.css';

export default function Player({ accessToken, trackUri, playingTrack }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <div className="player_container">
      <div className="gif_container">
        <Gifs playingTrack={playingTrack} play={play} />
      </div>
      <div className="spotify_player_container">
        <SpotifyPlayer
          token={accessToken}
          showSaveIcon
          callback={(state) => {
            !state.isPlaying ? setPlay(false) : setPlay(true);
          }}
          play={play}
          uris={trackUri ? [trackUri] : []}
          styles={{
            activeColor: '#fff',
            bgColor: 'rgb(33, 33, 33)',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: 'rgb(29, 185, 84)',
            trackArtistColor: 'rgb(179, 179, 179)',
            trackNameColor: '#fff',
            height: '75px',
          }}
        />
      </div>
    </div>
  );
}
