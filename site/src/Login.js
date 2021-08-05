import React from 'react';
import './css/login.css';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=cb4b7f6508944aa380ace0748edb7452&response_type=code&redirect_uri=https://tender-heyrovsky-54413e.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login() {
  return (
    <div className="loginContainer">
      <h1 className="loginLogo">SPOTIVISION</h1>
      <p>
        Watch a constantly changing stream of related gifs while you listen to
        your favorite songs on Spotify! To get started, log in to your Spotify
        account.
      </p>
      <a href={AUTH_URL} className="loginButton">
        Log in with Spotify
      </a>
    </div>
  );
}
