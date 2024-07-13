import React, { useEffect, useContext, useState } from 'react'
import { LoginContext } from './Contexts/LoginContext';
import { checkToken } from './customHooks/checkToken';


var CLIENT_ID = import.meta.env.VITE_CLIENT_KEY
var REDIRECT_URI = "https://sptfyclonemgv.netlify.app"
var SCOPE_SEPARATOR_VALUE = "%20"
var scope = ['user-read-private', 'user-read-email', 'user-library-read', 'user-library-modify', 'user-follow-read', 'playlist-modify-public', 'playlist-modify-private', 'user-top-read', 'playlist-read-private', 'user-follow-read', 'user-follow-modify', 'streaming']
var SCOPE_VALUES = scope.join(SCOPE_SEPARATOR_VALUE)

var AUTH_LOGIN_URL = `https://accounts.spotify.com/authorize?
client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&scope=${SCOPE_VALUES}
&response_type=token
&show_dialog=true`



export default function Login() {



    useEffect(() => {
        if (window.localStorage.getItem("accessToken")) {
            console.log("Token Present")
            window.location.href = "/home#"

        }


    }, [])

    function handleLogin() {
        window.location = AUTH_LOGIN_URL;

    }


    return (
        <div className='h-screen bg-main-color flex gap-10 flex-col justify-center items-center'>
            <img src='Spotify_Logo_RGB_White.png' className='w-72'></img>
            <div className='flex justify-center  text-center items-center bg-white text-black shadow-sm shadow-white border-2 rounded-lg border-gray-300 w-72 h-20'>
                <button onClick={handleLogin} className=' rounded-xl'> Sign-in With Spotify</button>
            </div>
        </div>
    )
}
