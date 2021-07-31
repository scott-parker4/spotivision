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
        <p>{track.artist}</p>
        <p>{track.title}</p>
      </div>
    </div>
  );
}
