import React, { useContext, useEffect } from 'react'
import MainContent from './MainContent'
import { LoginContext } from '../../Contexts/LoginContext'
import axios from 'axios'
import { checkToken } from '../../customHooks/checkToken';

const ALBUMS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?limit=6";
const USER_TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?limit=10"
const USER_DATA = "https://api.spotify.com/v1/me"
const USER_SAVED_TRACKS = "https://api.spotify.com/v1/me/tracks?limit=4"
const USER_PLAYLIST = "https://api.spotify.com/v1/me/playlists"


export const Homepage = () => {

    const { token, setToken, setMyData, setUserTopArtists, setUserData, setUserSavedTracks, setUserPlaylist } = useContext(LoginContext)



    useEffect(() => {
        checkToken()

        axios.all([
            axios.get(ALBUMS_ENDPOINT, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),

            axios.get(USER_TOP_ARTISTS_ENDPOINT, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(USER_DATA, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(USER_SAVED_TRACKS, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(USER_PLAYLIST, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            })
        ]).then(axios.spread((albums, userTopArtists, userData, userSavedTracks, userPlaylist) => {
            setMyData(albums.data)
            setUserTopArtists(userTopArtists.data)
            setUserData(userData.data)
            setUserSavedTracks(userSavedTracks.data)
            setUserPlaylist(userPlaylist.data)


        }))
    }, [])



    return (

        <div className='flex w-full'>
            <MainContent />

        </div>


    )
}
