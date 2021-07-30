import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import Gifs from './Gifs'

export default function Player({ accessToken, trackUri, playingTrack }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])
      
    
    if (!accessToken) return null
    return (
        <>
        <Gifs playingTrack={playingTrack} play={play} />
        <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        callback={state => {
            !state.isPlaying ? setPlay(false) : setPlay(true)
            
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />
        </>
    )
}
