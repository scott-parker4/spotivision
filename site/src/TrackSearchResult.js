import React from 'react';
import './css/trackSearchResult.css';

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div className="resultBox" onClick={handlePlay}>
      <img className="resultImg" src={track.albumUrl} alt={track.title} />
      <div className="artistTitleBox">
        <p>{track.title}</p>
        <p>{track.artist}</p>
      </div>
    </div>
  );
}
