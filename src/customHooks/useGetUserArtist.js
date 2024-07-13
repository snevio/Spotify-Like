import axios from 'axios';
import React, { useEffect, useState } from 'react'
import headers from '../Contexts/axiosHeader';

export function useGetUserArtist() {


    const USER_FOLLOWED_ARTIST_ENDPOINT = "https://api.spotify.com/v1/me/following?type=artist";
    const [followedArtists, setFollowedArtists] = useState("")

    useEffect(() => {
        axios.get(USER_FOLLOWED_ARTIST_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setFollowedArtists(res.data)
        })
    }, [])
    return followedArtists
}

