import axios from "axios";
import headers from "../Contexts/axiosHeader";

const FOLLOW_ENDPOINT = `https://api.spotify.com/v1/me/following?type=artist&ids=`


export async function useFollow(id) {

    await axios.put(FOLLOW_ENDPOINT + id, {
        "ids": id
    },
        headers
    ).then((res) => {
        if (res.status == '204') {
            location.reload();
        }
    })
}
