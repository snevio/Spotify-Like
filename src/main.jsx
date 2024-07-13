import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import './index.css'
import SearchPage from './components/SearchPage/SearchPage.jsx'
import Artist from './components/ArtistsPage/Artist.jsx'
import ArtistDetails from './components/ArtistsPage/ArtistDetails.jsx'
import PlaylistPage from './components/PlaylistPage/PlaylistPage.jsx'
import AlbumPage from './components/AlbumPage/AlbumPage.jsx'
import Library from './components/UserLibrary/Library.jsx'
import { LibraryTracks } from './components/UserLibrary/LibraryTracks.jsx'
import Sidebar from './components/Homepage/Sidebar/Sidebar.jsx'
import SmartPhoneBar from './components/Homepage/SmarphoneBar/SmartphoneBar.jsx'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Login from './Login.jsx'



function Layout() {

  var location = useLocation();

  const [song, setSong] = useState("")
  const [songName, setSongName] = useState("")

  //Im commenting this one down because is such a mess i need to tell my future self what is going on here.
  //The code below makes so that, if I'm in the /login route, then i won't apply the div with the 100vh-100px(this is made so that the player won't overlap with the bottom content.)
  //In every other page i will then render the Sidebar, SmarphoneBar and AudioPlayer with the reduced div width.

  return (
    <div className='w-full flex flex-col gap-5'>
      {window.location.pathname !== '/login' ?
        <div className='md:flex md:h-[calc(100vh-110px)] overflow-hidden' id="outlet">


          <Sidebar />
          <SmartPhoneBar />
          <AudioPlayer autoPlay src={song} onPlay={e => console.log("onPlay")} className='md:block md:bottom-0 fixed bottom-20 z-50' />


          <div className='md:overflow-auto md:flex-1 ' id="outlet-child">
            <Outlet context={{ setSong, songName, setSongName }} key={location.key} />
          </div>
        </div>

        :

        <Login />

      }

    </div>

  )
}


//This type of routing is the newest but is a nightmare and i will never use it again if I don't specifically have it. (Will fall back to the good old Route + Routes.)

const router = createBrowserRouter([{



  element:

    <Layout />,


  children: [
    {
      path: '/',
      element: <App />,

    },
    {
      path: '/home',
      element: <App />
    },

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/search',
      element: <SearchPage />
    },

    {
      path: 'artist',
      element: <Artist key={location.key} />
    },
    {
      path: 'artist/:id',
      element: <ArtistDetails key={location.key} />
    },
    {
      path: 'playlist/:id',
      element: <PlaylistPage />
    },
    {
      path: 'album/:id',
      element: <AlbumPage />
    },

    {
      path: 'library',
      element: <Library />
    },

    {
      path: 'library/tracks',
      element: <LibraryTracks />
    }
  ],



}

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} key={'all'} />
  </React.StrictMode>

)
