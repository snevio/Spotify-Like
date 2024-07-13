import axios from "axios";
import headers from "../Contexts/axiosHeader";

const FOLLOW_ENDPOINT = `https://api.spotify.com/v1/me/following?type=artist&ids=`

export async function useUnfollow(id) {
    await axios.delete(FOLLOW_ENDPOINT + id, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            'Content-Type': 'application/json'
        }
    }, {
        "ids": id
    },

    ).then((res) => {
        if (res.status == '204') {
            location.reload();
        }
    })
}