import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track)
    }
    return (
    <div onClick={handlePlay}>
        <img src={track.albumUrl} alt={track.title} />
        <p>{track.title}</p>
        <p>{track.artist}</p>
    </div>
    )
}