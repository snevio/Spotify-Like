import axios from "axios";
import { useEffect, useState } from "react";
import headers from "../Contexts/axiosHeader";

export default function getUserSavedTracks() {

    const USER_SAVED_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/tracks?limit=50"

    const [tracks, setTracks] = useState()

    useEffect(() => {
        axios.get(USER_SAVED_TRACKS_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data)
            setTracks(res.data)
        })
    }, [])
    return tracks
}