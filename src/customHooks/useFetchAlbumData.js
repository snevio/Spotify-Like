import { useEffect, useState } from "react"
import headers from "../Contexts/axiosHeader";
import axios from "axios";


export function useFetchAlbumData(albumId) {

    const ALBUM_ENDPOINT = "https://api.spotify.com/v1/albums/";

    const [albumData, setAlbumData] = useState()


    useEffect(() => {
        const fetchAlbumData = async () => {
            await axios.get(ALBUM_ENDPOINT + albumId, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                // console.log(res.data)
                setAlbumData(res.data)
            })

        }
        fetchAlbumData();

    }, [])

    return albumData
}