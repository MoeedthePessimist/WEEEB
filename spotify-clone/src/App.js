import { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Loginpage/Login'
import { getTokenFromUrl } from './Components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Playerpage/Player'
import { useStateProviderValue } from './Components/StateProvider'

const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token }, dispatch] = useStateProviderValue()
  


  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })      
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
        
      spotify.getUserPlaylists().then((playlists) => {
        //console.log(playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
        })
      })

      spotify.getPlaylist('37i9dQZEVXcI90mBh9lX7T').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

      spotify.getMyTopArtists().then((response) =>{
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      })
    }
    //console.log(user);
    //console.log('A TOKEN IS HERE >>>>', token);
  }, [])


  return (
    <div className="app">
      {token ? (<Player spotify = {spotify}/>):(<Login />)}
    </div>
  )
}

export default App
