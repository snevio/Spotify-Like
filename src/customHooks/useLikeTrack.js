import axios from "axios";
import headers from "../Contexts/axiosHeader";


const TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/tracks?ids='

export async function useLikeTrack(id) {

    await axios.put(TRACK_ENDPOINT + id, {
        "ids": id
    },
        headers
    ).then((res) => {
        if (res.status == '200') {
            location.reload();
        }
    })



}