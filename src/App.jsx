import { Children, useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import { Homepage } from './components/Homepage/Homepage'
import { LoginContext } from './Contexts/LoginContext'
import { checkToken } from './customHooks/checkToken'





function App() {



  const [token, setToken] = useState('')
  const [myData, setMyData] = useState('')
  const [featuredPlaylist, setFeaturedPlaylist] = useState('')
  const [userTopArtists, setUserTopArtists] = useState('')
  const [userData, setUserData] = useState('')
  const [userSavedTracks, setUserSavedTracks] = useState('')
  const [userPlaylist, setUserPlaylist] = useState('')


  // console.log(userSavedTracks)
  //console.log(token)
  //console.log(userData)
  //console.log(userTopArtists)
  //console.log(userPlaylist)
  //console.log(myData)

  checkToken();


  useEffect(() => {
    const token = window.localStorage.getItem("accessToken")
    const queryString = window.location.hash;
    var currentDate = new Date();



    if (!token && queryString) {

      console.log("No token!")
      const urlParams = new URLSearchParams(queryString)
      const SPOTIFY_TOKEN = urlParams.get('#access_token') // Changes Everytime
      window.localStorage.setItem("accessToken", SPOTIFY_TOKEN)
      window.localStorage.setItem("tokenExpiration", (currentDate.getTime() + 3600000))

    }
    else {
      setToken(token)
    }



  }, [])


  return (
    <>
      <LoginContext.Provider value={{
        token,
        setToken,
        myData,
        setMyData,
        userTopArtists,
        setUserTopArtists,
        userData,
        setUserData,
        userSavedTracks,
        setUserSavedTracks,
        userPlaylist,
        setUserPlaylist
      }}>
        {token ?

          <Homepage />

          :

          <Login />}

      </LoginContext.Provider>

    </>
  )
}

export default App
