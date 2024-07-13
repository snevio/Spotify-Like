
import axios from "axios";
import headers from "../Contexts/axiosHeader";

const ALBUM_ENDPOINT = 'https://api.spotify.com/v1/me/albums?ids='

export async function useLikeAlbum(id) {
    await axios.put(ALBUM_ENDPOINT + id, {
        "ids": id
    },
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json'
            }
        }
    ).then((res) => {
        if (res.status == '200') {
            location.reload();
        }
    })

}