import axios from 'axios'
import React, { useEffect } from 'react'
import headers from '../Contexts/axiosHeader'

export async function useDislikeTrack(id) {

    const TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/tracks?ids='


    await axios.delete(TRACK_ENDPOINT + id, headers, {
        "ids": id
    },
        headers
    ).then((res) => {
        if (res.status == '200') {
            location.reload();
        }
    })
}



