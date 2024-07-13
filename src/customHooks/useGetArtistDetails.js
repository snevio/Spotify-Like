import axios from "axios";
import { useEffect, useState } from "react";
import headers from "../Contexts/axiosHeader";

export function useGetArtistDetails(artistId) {



    const ARTIST_ENDPOINT = "https://api.spotify.com/v1/artists/"
    const SEARCH_ENDOINT = "https://api.spotify.com/v1/search?"
    const FOLLOW_ENDPOINT = 'https://api.spotify.com/v1/me/following/contains?type=artist&ids='

    const [artist, setArtist] = useState("");
    const [isFollowing, setIsFollowing] = useState([])
    const [artistTracks, setArtistTracks] = useState("");
    const [artistAlbums, setArtistAlbums] = useState("");
    const [relatedArtists, setRelatedArtists] = useState("")
    const [artistPlaylist, setArtistPlaylist] = useState("")

    useEffect(() => {

        axios.all([

            axios.get(ARTIST_ENDPOINT + artistId, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(FOLLOW_ENDPOINT + artistId, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(ARTIST_ENDPOINT + artistId + "/top-tracks?limit=5&market=IT", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(ARTIST_ENDPOINT + artistId + "/albums", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),
            axios.get(ARTIST_ENDPOINT + artistId + "/related-artists", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }),



        ]).then(axios.spread(({ data: artistData }, { data: following }, { data: tracks }, { data: albums }, { data: related_artist }) => {
            setArtist(artistData)
            setIsFollowing(following)
            setArtistTracks(tracks)
            setArtistAlbums(albums)
            setRelatedArtists(related_artist)
            //console.log({ artistData, following, tracks, albums, related_artist })
        }))



    }, [])

    useEffect(() => {

        if (artist) {
            const getPlaylist = async () => {
                try {
                    axios.get(SEARCH_ENDOINT + "query=" + artist.name + "&type=playlist", {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => {
                        //  console.log(res.data)
                        setArtistPlaylist(res.data)
                    })

                } catch (err) {
                    console.log("Catch some errors");
                }
            }


            getPlaylist();
        }
    }, [artist])



    return { artist, isFollowing, artistTracks, artistAlbums, relatedArtists, artistPlaylist }

}