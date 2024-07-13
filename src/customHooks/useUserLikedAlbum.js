import { useEffect, useState } from "react"
import headers from "../Contexts/axiosHeader"
import axios from "axios"

export function useUserLikedAlbum(albumId) {

    const ALBUM_ENDPOINT = "https://api.spotify.com/v1/me/albums/"
    const [isLiked, setIsLiked] = useState()

    useEffect(() => {
        const fetchIsLiked = async () => {
            await axios.get(ALBUM_ENDPOINT, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {

                const albums = res.data

                setIsLiked(() => albums.items.find((element) => {
                    if (element.album.id === albumId) {
                        console.log("123")
                        setIsLiked(true)
                        return true
                    }
                    else {
                        setIsLiked(false)
                    }
                }))

            })

        }
        fetchIsLiked();

    }, [])

    return isLiked



}