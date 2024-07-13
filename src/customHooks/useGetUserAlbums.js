import axios from 'axios';
import React, { useEffect, useState } from 'react'
import headers from '../Contexts/axiosHeader';

export function useGetUserAlbums() {


    const USER_FOLLOWED_ALBUMS_ENDPOINT = "https://api.spotify.com/v1/me/albums";
    const [followedAlbums, setfollowedAlbums] = useState("")

    useEffect(() => {
        axios.get(USER_FOLLOWED_ALBUMS_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setfollowedAlbums(res.data)
        })
    }, [])
    return followedAlbums
}
