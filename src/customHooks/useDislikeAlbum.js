import axios from "axios";
import headers from "../Contexts/axiosHeader";

const ALBUM_ENDPOINT = 'https://api.spotify.com/v1/me/albums?ids='

export async function useDislikeAlbum(id) {
    await axios.delete(ALBUM_ENDPOINT + id, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            'Content-Type': 'application/json'
        }
    }, {
        "ids": id
    },
    ).then((res) => {
        if (res.status == '200') {
            location.reload();
        }
    })

}