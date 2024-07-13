import axios from "axios"
import { useEffect, useState } from "react"
import headers from "../Contexts/axiosHeader"

export function useFetchPlaylist(playlistId) {


    const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/playlists/"

    const [playlistData, setPlaylistData] = useState("")

    useEffect(() => {

        axios.get(PLAYLIST_ENDPOINT + playlistId, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data)
            setPlaylistData(res.data)
        })


    }, [])

    return playlistData

}