import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './useAuth';
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';

const spotifyApi = new SpotifyWebApi({
  clientId: 'cb4b7f6508944aa380ace0748edb7452',
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch('');
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="songs">
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>

      <Player
        accessToken={accessToken}
        trackUri={playingTrack?.uri}
        playingTrack={playingTrack}
      />
    </div>
  );
}
